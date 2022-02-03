import {
  defineComponent,
  PropType,
  onMounted,
  ref,
  onUnmounted,
  computed
} from 'vue'
import type { LegacyRef } from 'react'
import { GiscusProps } from '@shared/types'
import {
  addDefaultStyles,
  createErrorMessageListener,
  formatError,
  getIframeSrc,
  GISCUS_ORIGIN,
  GISCUS_SESSION_KEY
} from '@shared/util'
import iFrameResizer from 'iframe-resizer'

const Giscus = defineComponent({
  props: {
    repo: {
      type: String as PropType<GiscusProps['repo']>,
      required: true
    },
    repoId: {
      type: String as PropType<GiscusProps['repoId']>,
      required: true
    },
    category: String as PropType<GiscusProps['category']>,
    categoryId: String as PropType<GiscusProps['categoryId']>,
    mapping: {
      type: String as PropType<GiscusProps['mapping']>,
      required: true
    },
    term: String as PropType<GiscusProps['term']>,
    lang: {
      type: String as PropType<GiscusProps['lang']>,
      default: 'en'
    },
    theme: {
      type: String as PropType<GiscusProps['theme']>,
      default: 'light'
    },
    reactionsEnabled: {
      type: String as PropType<GiscusProps['reactionsEnabled']>,
      default: '1'
    },
    emitMetadata: {
      type: String as PropType<GiscusProps['emitMetadata']>,
      default: '0'
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

    const listener = createErrorMessageListener(() => (session.value = ''))
    onMounted(() => window.addEventListener('message', listener))
    onUnmounted(() => window.removeEventListener('message', listener))

    const iframe = ref<
      HTMLIFrameElement | { iFrameResizer: { removeListeners: () => void } }
    >()

    onMounted(() => {
      if (!iframe.value) return
      iframe.value = iframe.value as HTMLIFrameElement
      iframe.value.addEventListener('load', () =>
        iFrameResizer.iframeResizer(
          { checkOrigin: [GISCUS_ORIGIN] },
          iframe.value as HTMLIFrameElement
        )
      )
    })

    onUnmounted(() => {
      if (iframe.value && 'iFrameResizer' in iframe.value)
        iframe.value?.iFrameResizer?.removeListeners()
    })

    return () => (
      <div className="giscus">
        <iframe
          title="Comments"
          className="giscus-frame"
          src={src.value}
          ref={iframe as any as LegacyRef<HTMLIFrameElement>}
        />
      </div>
    )
  }
})

export default Giscus
