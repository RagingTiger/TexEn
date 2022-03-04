# About
**Tex**t [**En**tropy](https://en.wikipedia.org/wiki/Entropy) calculator right
in your browser.

# Docker
Deploy local/remote with *Docker*:
```
docker run -d --name texen -p 8080:80 ghcr.io/ragingtiger/texen:master
```

# Notes
+ Configuration will not work properly if *browsing local files* directly. This
  results from how `localStorage` works. Deploy the **Docker image**
  (see above [section](#docker)) to get the properly working configuration
  features.
