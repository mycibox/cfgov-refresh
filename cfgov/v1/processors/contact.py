from v1.models.snippets import Contact


def convert(doc):
    post_dict = {}
    return post_dict


def get_existing_snippet(imported_data):
    try:
        return Contact.objects.get(heading=imported_data['title'])
    except Contact.DoesNotExist:
        return None
