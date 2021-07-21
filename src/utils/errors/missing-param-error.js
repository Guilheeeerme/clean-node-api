module.exports = class MissingParamError extends Error {
  constructor (paramName) {
    super(`Missim param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
