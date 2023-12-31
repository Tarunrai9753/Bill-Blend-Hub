
function addFeature() {
    const featuresInput = document.getElementById('features');
    const featuresList = document.getElementById('featuresList');
    const featureValue = featuresInput.value.trim();

    if (featureValue !== '') {
        const listItem = document.createElement('li');
        listItem.className = 'feature-item';
        listItem.innerHTML = `<span class="feature-item__star"></span>${featureValue}`;
        featuresList.appendChild(listItem);

        // Clear the input field
        featuresInput.value = '';
    }
}

function submitForm(event) {
    event.preventDefault();

    // Get form data
    const planName = document.getElementById('planName').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    // Get features from the features list
    const featuresList = document.getElementById('featuresList');
    const features = Array.from(featuresList.children).map(item => item.textContent);

    // Create a new subscription plan element
    const plansContainer = document.getElementById('plansContainer');
    const subscriptionPlan = document.createElement('div');
    subscriptionPlan.className = 'subscription-plan';

    const planTitle = document.createElement('h3');
    planTitle.textContent = `Subscription Plan: ${planName}`;
    subscriptionPlan.appendChild(planTitle);

    const planDetails = document.createElement('p');
    planDetails.innerHTML = `<strong>Description:</strong> ${description}<br><strong>Price:</strong> ₹${price}`;
    subscriptionPlan.appendChild(planDetails);

    if (features.length > 0) {
        const featuresTitle = document.createElement('p');
        featuresTitle.innerHTML = `<strong>Features:</strong>`;
        subscriptionPlan.appendChild(featuresTitle);

        const featuresListContainer = document.createElement('ul');
        featuresListContainer.className = 'features-list';

        features.forEach(feature => {
            const listItem = document.createElement('li');
            listItem.className = 'feature-item';
            listItem.innerHTML = `<span class="feature-item__star"></span>${feature}`;
            featuresListContainer.appendChild(listItem);
        });

        subscriptionPlan.appendChild(featuresListContainer);
    }

    // Add the subscription plan to the container
    plansContainer.appendChild(subscriptionPlan);

    // Clear the form fields and features list
    document.getElementById('subscriptionForm').reset();
    document.getElementById('featuresList').innerHTML = '';
}
