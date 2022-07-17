export default{
    name:'services',
    title:'Services',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'desc',
            title:'Desc',
            type:'string'
        }
        ,
        {
            name:'link',
            title:'Link',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'tags',
            title: 'Tags',
           type:'array',
           of: [
             {
               name:'tag',
               title:'Tag',
               type:'object',
               fields:[
                 {
                    name:"label",
                    title:"Label",
                    type:"string"
                 },
                 {
                    name:"color",
                    title:"Color",
                    type:"string"
                 }
               ]
             }
           ]
          }
    ]
}