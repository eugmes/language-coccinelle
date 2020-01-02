exports.activate = function() {
  if (!atom.grammars.addInjectionPoint) return

  // TODO: Add injection points for script constraints
  atom.grammars.addInjectionPoint('source.coccinelle', {
    type: 'script',

    // (script
    //   (script_metavariables (language))
    //   (script_code))
    language (script) {
      const {firstChild} = script
      if (firstChild && firstChild.type === 'script_metavariables') {
        const language = firstChild.child(3)
        if (language && language.type == 'language') {
          return language.text
        }
      }
    },

    content (script) {
      const {lastChild} = script
      if (lastChild && lastChild.type === 'script_code') {
        return lastChild
      }
    }
  })
}
