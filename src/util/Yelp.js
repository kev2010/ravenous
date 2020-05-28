const apiKey = 'Wr3nXeHmF7IKx7YTc5N4fe1IMIyFCjZR6Y1CXLo3UQHoG-6pyB7ClfO4UNkXLRSmjssK4UqF6j7VEIDzd9gsG91833Ayw1fSQXmvNEZlhW-9MVHZPu28x73n7DzPXnYx';
const Yelp = {
    search(term, location, sortBy)  {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }));
                }
            });
    }
}

export default Yelp;
