---
layout: page
title: Reviews
excerpt: "Victorian Carol Singers Reviews"
---

<ul class="post-list">
{% for post in site.categories.review %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B, %Y" }}</time> </span><span class="excerpt">{{ post.excerpt }}</span>{% if post.authorname %}<span class="entry-date">{{ post.authorname }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
