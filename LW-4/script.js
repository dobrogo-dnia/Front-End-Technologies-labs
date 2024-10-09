const n = 9;
const targetIndex = (n % 10) + 1;

function toggleColors(element1, element2, firstBgClass, secondBgClass, firstTextClass, secondTextClass) {
    if (!element1.classList.contains(firstBgClass) && !element1.classList.contains(secondBgClass)) {
        element1.classList.add(firstBgClass, firstTextClass);
    } else if (element1.classList.contains(firstBgClass)) {
        element1.classList.replace(firstBgClass, secondBgClass);
        element1.classList.replace(firstTextClass, secondTextClass);
    } else {
        element1.classList.replace(secondBgClass, firstBgClass);
        element1.classList.replace(secondTextClass, firstTextClass);
    }

    if (!element2.classList.contains(firstBgClass) && !element2.classList.contains(secondBgClass)) {
        element2.classList.add(secondBgClass, secondTextClass);
    } else if (element2.classList.contains(secondBgClass)) {
        element2.classList.replace(secondBgClass, firstBgClass);
        element2.classList.replace(secondTextClass, firstTextClass);
    } else {
        element2.classList.replace(firstBgClass, secondBgClass);
        element2.classList.replace(firstTextClass, secondTextClass);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const targetElementId = document.getElementById(`item-${targetIndex}`);
    const nextElement = document.querySelector(`#item-${targetIndex + 1}`);

    if (targetElementId && nextElement) {
        targetElementId.addEventListener('click', () => {
            toggleColors(targetElementId, nextElement, 'bg-color-1', 'bg-color-2', 'text-color-1', 'text-color-2');
        });

        nextElement.addEventListener('click', () => {
            toggleColors(nextElement, targetElementId, 'bg-color-2', 'bg-color-1', 'text-color-2', 'text-color-1');
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('a[href="https://rada-uzhgorod.gov.ua"]');

    imageContainer.classList.add('image-container');

    const addImage = () => {
        const newImage = document.createElement('img');
        newImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80%2C_%D0%B0%D0%B5%D1%80%D0%BE%D1%84%D0%BE%D1%82%D0%BE_2.jpg/1280px-%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80%2C_%D0%B0%D0%B5%D1%80%D0%BE%D1%84%D0%BE%D1%82%D0%BE_2.jpg';
        newImage.alt = 'Ужгородський кафедральний собор';
        newImage.width = 800;
        imageContainer.appendChild(newImage);
    };

    const increaseImage = () => {
        const image = imageContainer.querySelector('img');
        if (image) {
            image.width += 50;
        }
    };

    const decreaseImage = () => {
        const image = imageContainer.querySelector('img');
        if (image && image.width > 50) {
            image.width -= 50;
        }
    };

    const removeImage = () => {
        const image = imageContainer.querySelector('img');
        if (image) {
            image.remove();
        }
    };

    document.getElementById('add').addEventListener('click', addImage);
    document.getElementById('increase').addEventListener('click', increaseImage);
    document.getElementById('decrease').addEventListener('click', decreaseImage);
    document.getElementById('remove').addEventListener('click', removeImage);
});