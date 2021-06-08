$('.ulList .accordion').on('click', (e) => {
    const ulBlock = $('.ulList .ulItem')
    const parentBlock = $(e.target).parent()
    if (parentBlock.hasClass('show')) {
      return
    }
  
    ulBlock.children('.panel').slideUp()
    ulBlock.removeClass('show')
  
    parentBlock.children('.panel').slideToggle('slow', () => {
      parentBlock.toggleClass('show')
    })
  
    const imageBlock = $('.imgBlock')
    const selector = '#' + e.target.id + 'Img'
  
    const showedImg = $(selector)
  
    //console.log(showedImg)
    imageBlock.children('.imgContainer').removeClass('active')
    showedImg.addClass('active')
  })
  