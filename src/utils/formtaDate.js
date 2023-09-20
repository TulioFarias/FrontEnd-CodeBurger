const formatDate = date => {
  return new Date(date).toLocaleDateString('pt-br', {
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default formatDate
