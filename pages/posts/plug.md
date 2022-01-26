---
title:  Discord Plug
date:  2022/1/26
description:  An API to export your discord data
tag:  discord
author:  DankCoder
---

![dplug](https://cdn.discordapp.com/attachments/935938691048820736/935946370609737768/f3f36456249b403c766b764170f90e0c.webp)
## Discord Plug API is now on v0.0.2-alpha ( closed source rn )

**What does this mean?**
- You can export your discord profile data to an API.
The endpoint is wildcarded as

```
https://api.discordplug.gq/api/{discord_userid}
```

**Profile Banners**

- The Bakerie API will be updated next week to use the newer Discord Plug API, this change will be accommodated along with fresh banner themes

**Use Cases**

- This API could be used in dynamic websites to flex your profile

**Future**

- In future, I plan to add to add support for a websocket API to pair up with the current REST API, this would allow you to display stuff like live Spotify visualizers on your website ( also what salmon does )