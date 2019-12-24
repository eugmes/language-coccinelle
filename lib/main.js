exports.activate = function() {
  if (!atom.grammars.addInjectionPoint) return

  atom.grammars.addInjectionPoint('source.coccinelle', {
    type: 'changeset',

    // (changeset
    //   (script_metavariables (language))
    //   (script_code)))
    language (changeset) {
      const {firstChild} = changeset
      if (firstChild.type === 'script_metavariables') {
        const language = firstChild.child(2)
        return language.text
      }
    },

    content (changeset) {
      const {lastChild} = changeset
      if (lastChild.type === 'script_code') {
        return lastChild
      }
    }
  })
}
