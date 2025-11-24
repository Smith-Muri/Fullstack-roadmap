const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');


const validators = {
    name: (value) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value),
    lastName: (value) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value),
    telephone: (value) => value === '' || /^\d*$/.test(value),
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    linkedin: (value) => value === '' || /^https?:\/\/.+/.test(value)
};

function validateField(fieldId, validator) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + 'Error');
    
    field.addEventListener('input', function() {
        if (this.value && !validator(this.value)) {
            this.classList.add('is-invalid');
            errorDiv.classList.remove('d-none');
            errorDiv.classList.add('d-block');
        } else {
            this.classList.remove('is-invalid');
            errorDiv.classList.add('d-none');
            errorDiv.classList.remove('d-block');
        }
    });
}


Object.keys(validators).forEach(fieldId => {
    validateField(fieldId, validators[fieldId]);
});


form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const requiredFields = ['name', 'lastName', 'email'];
    

    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + 'Error');
        
        if (!field.value.trim()) {
            field.classList.add('is-invalid');
            errorDiv.textContent = 'Este campo es obligatorio';
            errorDiv.classList.remove('d-none');
            errorDiv.classList.add('d-block');
            isValid = false;
        } else if (validators[fieldId] && !validators[fieldId](field.value)) {
            isValid = false;
        }
    });

    
    ['telephone', 'linkedin'].forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field.value && validators[fieldId] && !validators[fieldId](field.value)) {
            isValid = false;
        }
    });

    if (isValid) {
        successMessage.classList.remove('d-none');
        successMessage.classList.add('d-block');
        setTimeout(() => {
            successMessage.classList.add('d-none');
            successMessage.classList.remove('d-block');
        }, 3000);
        
        console.log('Datos del formulario:', {
            name: document.getElementById('name').value,
            lastName: document.getElementById('lastName').value,
            telephone: document.getElementById('telephone').value,
            birthday: document.getElementById('birthday').value,
            email: document.getElementById('email').value,
            linkedin: document.getElementById('linkedin').value,
            gender: document.getElementById('gender').value
        });

        
        form.reset();
        
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        document.querySelectorAll('.invalid-feedback.d-block').forEach(el => {
            el.classList.remove('d-block');
            el.classList.add('d-none');
        });
    }
});


document.getElementById('cancelBtn').addEventListener('click', function() {
    form.reset();
    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    document.querySelectorAll('.invalid-feedback').forEach(el => {
        el.classList.add('d-none');
        el.classList.remove('d-block');
    });
    successMessage.classList.add('d-none');
    successMessage.classList.remove('d-block');
});
