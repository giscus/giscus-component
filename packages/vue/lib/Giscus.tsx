import {
  defineComponent,
  PropType,
  onMounted,
  ref,
  onUnmounted,
  computed
} from 'vue'
import {
  BooleanString,
  GiscusProps,
  InputPosition,
  Lang,
  Mapping,
  Repo,
  Theme
} from '@shared/types'
import {
  addDefaultStyles,
  createErrorMessageListener,
  formatError,
  getIframeSrc,
  GISCUS_SESSION_KEY
} from '@shared/util'

const Giscus = defineComponent({
  props: {
    repo: {
      type: String as PropType<Repo>,
      required: true
    },
    repoId: {
      type: String as PropType<string>,
      required: true
    },
    category: String as PropType<string>,
    categoryId: String as PropType<string>,
    mapping: {
      type: String as PropType<Mapping>,
      required: true
    },
    term: String as PropType<string>,
    lang: {
      type: String as PropType<Lang>,
      default: 'en'
    },
    theme: {
      type: String as PropType<Theme>,
      default: 'light'
    },
    reactionsEnabled: {
      type: String as PropType<BooleanString>,
      default: '1'
    },
    emitMetadata: {
      type: String as PropType<BooleanString>,
      default: '0'
    },
    inputPosition: {
      type: String as PropType<InputPosition>,
      default: 'bottom'
    }
  },

  setup(props: GiscusProps) {
    const session = ref('')
    const src = computed(() =>
      getIframeSrc({ ...props, session: session.value })
    )

    onMounted(() => {
      const origin = location.href
      const url = new URL(origin)
      const savedSession = localStorage.getItem(GISCUS_SESSION_KEY)
      session.value = url.searchParams.get('giscus') || ''

      if (session.value) {
        localStorage.setItem(GISCUS_SESSION_KEY, JSON.stringify(session.value))
        url.searchParams.delete('giscus')
        history.replaceState(undefined, document.title, url.toString())
      } else if (savedSession) {
        try {
          session.value = JSON.parse(savedSession || '') || ''
        } catch (e: any) {
          session.value = ''
          localStorage.removeItem(GISCUS_SESSION_KEY)
          console.warn(`${formatError(e?.message)} Session has been cleared.`)
        }
      }
    })

    onMounted(addDefaultStyles)

    const iframe = ref<HTMLIFrameElement>()

    onMounted(() => {
      const listener = createErrorMessageListener(
        () => (session.value = ''),
        iframe.value
      )
      window.addEventListener('message', listener)
      onUnmounted(() => window.removeEventListener('message', listener))
    })

    return () => (
      <div className="giscus">
        <iframe
          className="giscus-frame"
          title="Comments"
          scrolling="no"
          src={src.value}
          ref={iframe as any}
        />
      </div>
    )
  }
})

export default Giscus
