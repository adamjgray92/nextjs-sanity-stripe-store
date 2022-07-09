export default {
  name: 'collection',
  type: 'document',
  title: 'Collection',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'banner',
      type: 'image',
      title: 'Banner',
      options: {
        hotspot: true,
      },
    },
  ],
};
