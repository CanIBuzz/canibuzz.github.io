---
title: Blog
permalink: /blog.html
layout: page3
---
{% for post in site.posts %}{
{% raw %}
'language': 'en',
'title': '{{ post.title | jsonify }}',
'summary': '{{ blog.description | jsonify }}',
'categories': '{{ post.content | jsonify }}',
'date_published': '{{ post.date | date_to_xmlschema }}',
'date_modified': '{{ blog.last_modified_at | date_to_xmlschema }}',
'image': '{{ blog.image.path | absolute_url }}'
{% endraw %}
}
{% unless forloop.last %},{% endunless %}{% endfor %}
