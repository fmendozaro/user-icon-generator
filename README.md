# Random user icon generator

![image 1](https://fer-uig.glitch.me?uuid=1)
![image 2](https://fer-uig.glitch.me?uuid=2)
![image 3](https://fer-uig.glitch.me?uuid=3)

To get one random user icon just use the live site URL inside of an HTML image tag

```
<img src="https://fer-uig.glitch.me" alt="user-icon" />
```

#### Getting several icons in one page

Without JavaScript you can just add a random query string to the url.

```
<img src="https://fer-uig.glitch.me?uuid=1" alt="user-icon" />
<img src="https://fer-uig.glitch.me?uuid=777" alt="user-icon" />
<img src="https://fer-uig.glitch.me?uuid=999" alt="user-icon" />
```

#### Dynamic JavaScript solution

- Add a class to all your `<img>` tags
```
<img class="user-icon" alt="user-icon" />
<img class="user-icon" alt="user-icon" />
<img class="user-icon" alt="user-icon" />
```
- Change the `src` attribute for each element adding a random value to a query string
```
<script>
    for (let e of document.getElementsByClassName('user-icon')) {
        e.src = 'https://fer-uig.glitch.me?r='+ Math.random();
    }
</script>
```

### Live site

You can access the image resources via glitch.me https://fer-uig.glitch.me  