# Carousel Reusable Component

A lightweight, customizable carousel component for React applications.

## Features

- Simple and intuitive API
- Customizable navigation dots
- Responsive design
- Smooth transitions
- Support for custom styling

## Installation

```bash
npm install carousel-reusable-component
```

## Usage

```jsx
import Carousel from 'carousel-reusable-component';

function App() {
  const items = [
    {
      id: '1',
      name: 'Paris',
      imageUrl: '/images/paris.jpg',
    },
    {
      id: '2',
      name: 'London',
      imageUrl: '/images/london.jpg',
    },
    // Add more items as needed
  ];

  return (
    <div className="app">
      <Carousel items={items} />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | Array | Required | Array of items to display in the carousel |
| `className` | String | `''` | Additional CSS class for the carousel container |
| `dotIcon` | Node | `<GoDot />` | Icon for inactive navigation dots |
| `activeDotIcon` | Node | `<GoDotFill />` | Icon for active navigation dot |

## Item Structure

Each item in the `items` array should have the following structure:

```js
{
  id: string,       // Unique identifier
  name: string,     // Caption text
  imageUrl: string  // URL to the image
}
```

## Customization

You can customize the appearance of the carousel by passing a `className` prop and defining your own CSS rules:

```css
.my-custom-carousel {
  width: 100%;
  height: 400px;
  border-radius: 15px;
}
```

```jsx
<Carousel 
  items={items} 
  className="my-custom-carousel" 
/>
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.