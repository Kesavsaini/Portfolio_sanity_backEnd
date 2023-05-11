export default{
    name:'slide',
    title:'Slide',
    type: 'document',
    fields:[
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'link',
            title:'Link',
            type:'string'
        },
        
    ]
}