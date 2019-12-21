describe "Coccinelle grammar", ->
  grammar = null

  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage("language-coccinelle")

    runs ->
      grammar = atom.grammars.grammarForScopeName("source.coccinelle")

  it "parses the grammar", ->
    expect(grammar).toBeTruthy()
    expect(grammar.scopeName).toBe "source.coccinelle"
