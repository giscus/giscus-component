import { defineComponent, PropType, onMounted, ref } from 'vue'
import type { LegacyRef } from 'react'
import { Theme, UtterancesProps, Repo, Term } from '@shared/types'
import { createScriptElement, putChildElement } from '@shared/util'

const Utterances = defineComponent({
  props: {
    repo: {
      type: String as PropType<Repo>,
      required: true
    },
    theme: {
      type: String as PropType<Theme>,
      required: true
    },
    label: String,
    issueTerm: String as PropType<Term>,
    issueNumber: Number
  },

  setup(props) {
    const divRef = ref<HTMLDivElement>()
    onMounted(() => {
      if (!divRef.value) return

      const scriptEl = createScriptElement(props as UtterancesProps)

      divRef.value = putChildElement(divRef.value, scriptEl)
    })

    return () => <div ref={divRef as any as LegacyRef<HTMLDivElement>} />
  }
})

export default Utterances
