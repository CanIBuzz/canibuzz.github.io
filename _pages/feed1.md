---
permalink: /blog/page2.html
layout: page2
---
{% for post in site.posts %}{
            "id": "{{ blog.url | absolute_url }}",
            "url": "{{ blog.url | absolute_url }}",
            "language": "en",
            "title": {{ post.title | jsonify }},
            "summary": {{ blog.description | jsonify }},
            "content_html": {{ post.content | jsonify }},
            "date_published": "{{ blog.date | date_to_xmlschema }}",
            "date_modified": "{{ blog.last_modified_at | date_to_xmlschema }}",
            "image": "{{ blog.image.path | absolute_url }}",
            "banner_image": "{{ blog.image.path | absolute_url }}",
            "authors": [{{ blog.author | jsonify }}],
            "categories": {{ blog.categories | jsonify }},
            "tags": {{ blog.tags | jsonify }}
}
        {% unless forloop.last %},{% endunless %}{% endfor %}
