const container = document.querySelector('.container');
		const folder = 'assets/gallery/';
		fetch(folder)
			.then(response => response.text())
			.then(text => {
				const parser = new DOMParser();
				const html = parser.parseFromString(text, 'text/html');
				const images = html.querySelectorAll('a[href$=".jpg"], a[href$=".png"], a[href$=".jpeg"]');
				images.forEach(image => {
					const img = document.createElement('img');
					img.src = folder + image.getAttribute('href');
					container.appendChild(img);
				});
			})
            .catch(error => {
				console.error(error);
			});