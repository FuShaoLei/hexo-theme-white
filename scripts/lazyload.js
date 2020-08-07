'use strict'

hexo.extend.filter.register(
  'after_post_render',
  function (data) {
    var theme = hexo.theme.config
    if (theme.lazyload.open!==true) return;

    data.content = data.content.replace(
      // Match 'img' tags width the src attribute.
      /<img([^>]*)src="([^"]*)"([^>]*)>/gim,
      function (match, attrBegin, src, attrEnd) {
        // Exit if the src doesn't exists.
        if (!src) {
          return match
        }

        return `
        <span class="lazyload-img-span">
        <img ${attrBegin} 
           data-src="${src}" >
        </sapn>
      `
      }
    )
  },
  1
)
