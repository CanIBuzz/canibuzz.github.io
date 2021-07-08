---
permalink: /blog/feed.json
layout: none
---
{
    "version": "https://jsonfeed.org/version/1.1",
    "title": "{{ 'JSON Feed for ' | append: site.author | xml_escape }}",
    "description": {{ site.description | jsonify }},
    "favicon": "{{ '/assets/images/logos/favicons/apple-touch-icon.png' | absolute_url }}",
    "language": "en",
    "home_page_url": "{{ "/" | absolute_url }}",
    "feed_url": "{{ "/blog/feed.json" | absolute_url }}",
    "user_comment": "This feed allows you to read the blogs from this site in any feed reader that supports the JSON Feed format.",
    "items": [{% for post in site.posts %}
        {
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
    ]
}