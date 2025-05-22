class FooterShapes {
    constructor () {
        this.shapesContainer = document.querySelector('.footer-shapes');
        if (!this.shapesContainer) {
            return;
        }
        this.listen();
    }

    listen () {
        this.images = [];

        this.getImagesUrl();
        this.createImage();
    }

    getImagesUrl() {
        for (let i = 0; i < 18; i++) {
            let imageIndex = i + 1;
            let imageUrl = `/assets/images/footer-shapes/shape-${imageIndex}.svg`;
            this.images.push(imageUrl);
        }
    }

    createImage () {
        for (let i = 0; i < 3; i++) {
            let image = document.createElement('img');
            let url = this.images[Math.floor(Math.random() * this.images.length)];

            image.src = url;
            this.shapesContainer.appendChild(image);
        }
    }
}

export default new FooterShapes();