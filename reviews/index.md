---
layout: page
title: Reviews
excerpt: "An archive of review posts sorted by date."
search_omit: true
---

<ul class="post-list">
{% for post in site.categories.review %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time> By {{ post.authorname }}</span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt }}</span>{% endif %}{% if post.authorname %}<span class="entry-date">By {{ post.authorname }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
