function validateForm() {
    const name = document.getElementById('name').value;
    const variant = document.getElementById('variant').value;
    const group = document.getElementById('group').value;
    const faculty = document.getElementById('faculty').value;
    const birthdate = document.getElementById('birthdate').value;

    const namePattern = /^[А-ЯЇІЄҐ]{1}[а-яїієґ]+\s[А-ЯЇІЄҐ]{1}\.[А-ЯЇІЄҐ]{1}\.$/;
    const variantPattern = /^\d{1,2}$/;
    const groupPattern = /^[А-ЯІЇЄҐ]{2}-\d{2}$/;
    const facultyPattern = /^[А-ЯІЇЄҐ]{4}$/;
    const birthdatePattern = /^\d{2}\.\d{2}\.\d{4}$/;

    let isValid = true;

    if (!namePattern.test(name)) {
        document.getElementById('name').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('name').style.borderColor = 'green';
    }

    if (!variantPattern.test(variant)) {
        document.getElementById('variant').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('variant').style.borderColor = 'green';
    }

    if (!groupPattern.test(group)) {
        document.getElementById('group').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('group').style.borderColor = 'green';
    }

    if (!facultyPattern.test(faculty)) {
        document.getElementById('faculty').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('faculty').style.borderColor = 'green';
    }

    if (!birthdatePattern.test(birthdate)) {
        document.getElementById('birthdate').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('birthdate').style.borderColor = 'green';
    }

    if (isValid) {
        const info = `ПІБ: ${name}\nВаріант: ${variant}\nГрупа: ${group}\nФакультет: ${faculty}\nДата народження: ${birthdate}`;
        window.open().document.write(`<pre>${info}</pre>`);
    }
}