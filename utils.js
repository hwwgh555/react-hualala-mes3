function isArrayAndNotEmpty() {
  const isArray = Object.prototype.toString.call(record.assistantDTOs).slice(8,-1).toLowerCase() === 'array'
  const isEmpty = record.assistantDTOs.length > 0
  return isArray && isEmpty
}
