---
layout: default
title: Imagineering Hub
---

# An Open Fiction Sandbox

Welcome to the Imagineering Hub! You'll find some of my narrative experiments, feel free to enjoy, contribute (story, software, whatever) or give feedback! Most of this uses open licenses, see the full repo at https://github.com/TobbaT/ImagineeringHub .

## Table of Contents

<ul>
  {% assign story_indices = site.pages | where_exp:"page", "page.path contains '/public/index.md'" %}
  {% for story_index in story_indices %}
    <li>
      <h3><a href="{{ story_index.url }}">{{ story_index.title }}</a></h3>
      <p>{{ story_index.summary }}</p>
      <a href="https://github.com/TobbaT/{{ page.path }}">View on GitHub</a>
    </li>
  {% endfor %}
</ul>

