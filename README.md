###Step to Reproduce

1. Clone repo.
2. `npm i && ionic serve`.
3. Place a `subtree modifications` breakpoint on `app-root`.
4. Reload the application.
5. Step through the breakpoints until you see `app-home` added to the DOM.

> You can set a `subtree modification` breakpoint by right clicking an element in the "Elements" tab in Chrome, and then going to Break on > subtree modifications

In Angular <=8 apps, you should see `app-home` added as a child of `ion-router-outlet`.
In Angular 9 apps, you should see `app-home` initially added as a child of `ion-app` and then re-added as a child of `ion-router-outlet`.