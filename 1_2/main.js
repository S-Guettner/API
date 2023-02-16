fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(data => {

        data.forEach((image) => {
            const author = image.author
            const img = image.download_url
            console.log(author)
            console.log(img)

            const figureParent = document.createElement("figure")
            const imgChild = document.createElement("img")
            imgChild.src =`${img}`
            const authorChild = document.createElement("figcaption")
            authorChild.innerText = `${author}`

            figureParent.appendChild(imgChild)
            figureParent.appendChild(authorChild)

            document.body.appendChild(figureParent)
        })
    })