<h1 align="center">Font Awesome 5 for SpringType</h2>

> Vector icons and social logos from fontawesome.com

<h2 align="center">Setup</h2>

    yarn add st-font-awesome

<h2 align="center">Use</h2>

Include the CSS from a CDN or locally:

```html
<head>

  <!-- add Font Awesome icon support -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />

</head>
```

Use the `<FA icon="${name}" />` SpringType component:

```ts
import { st } from 'springtype';
import { FA } from 'st-font-awesome';

st.render(<FA icon="plus" />);
```

<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/454817?v=4&s=150">
        </br>
        <a href="https://github.com/kyr0">Aron Homberg</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/12079044?s=150&v=4">
        </br>
        <a href="https://github.com/mansi1">Michael Mannseicher</a>
      </td>
    </tr>
  <tbody>
</table>

<h2 align="center">Contributing</h2>

Please help out to make this project even better and see your name added to the list of our  
[CONTRIBUTORS.md](./CONTRIBUTORS.md) :tada: