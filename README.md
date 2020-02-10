### Steps to Reproduce

1. Clone repo.
2. `npm i && ionic serve`.
3. Click "Go to /child page".
4. In the console, notice that you see a "Web Component loaded" message that is emitted from the `ion-textarea` (a web component).
5. Click the back button arrow in the top left.
6. Click "Go to /child page" again.

In Angular <=8 apps, you should see the "Web Component loaded" message logged **once** on subsequent page loads.
In Angular 9 apps, you should see the "Web Component loaded" message logged **twice** on subsequent page loads.

For further debugging, follow these steps:

1. Place a `subtree modifications` breakpoint on `app-root`.
> You can set a `subtree modification` breakpoint by right clicking an element in the "Elements" tab in Chrome, and then going to Break on > subtree modifications.
2. Click "Go to /child page".
3. Step through the breakpoints until you see `app-child` added to the DOM.

In Angular <=8 apps, you should see that `app-child` is immediately added to `ion-router-outlet`.
In Angular 9 apps, you should see that `app-child` is added to `ion-app` first, removed, then added to `ion-router-outlet`.