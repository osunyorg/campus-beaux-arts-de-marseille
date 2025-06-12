class CategoriesIcons {
    constructor () {
        this.containers = document.querySelectorAll('.post-categories, .event-categories, .posts__section .taxonomies-section, .taxonomies-single');
        if (!this.containers) {
            return;
        }
        this.listen();
    }

    listen () {
        this.containers.forEach((container) => {
            this.categories = container.querySelectorAll('li a');
            this.categories.forEach((category) => {
                this.setIconclass(category)
            })
        });
    }

    setIconclass(category) {
        var max = 9;
        var min = 1;
        var iconNumber = Math.floor(Math.random() * (max - min + 1) + min);
        category.classList += `icon-shape-0${iconNumber}`;
    }
}

export default new CategoriesIcons();