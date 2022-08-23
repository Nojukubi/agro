export default () => ({
  ckeditor: {
    enabled: true,
    config: {
      editor: {
        // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
        // if you need markdown support and output set: removePlugins: [''],
        // default is
        removePlugins: ['Markdown'],

        // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
        toolbar: {
          items: [
            'paragraph',
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'fontSize',
            'fontColor',
            'removeFormat',
            '|',
            'bulletedList',
            'todoList',
            'numberedList',
            '|',
            'alignment',
            'outdent',
            'indent',
            'horizontalLine',
            '|',
            'link',
            'StrapiMediaLib',
            'insertTable',
            'blockQuote',
            'mediaEmbed',
            '|',
            'htmlEmbed',
            'sourceEditing',
            '|',
            'subscript',
            'superscript',
            'strikethrough',
            'specialCharacters',
            '|',
            'fullScreen',
            'undo',
            'redo'
          ]
        },
        fontSize: {
          options: [9, 11, 13, 'default', 17, 19, 21, 27, 35],
          supportAllValues: false
        },
        fontFamily: {
          options: [
            'default',
            'Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif',
            'Courier New, Courier, monospace',
            'Georgia, serif',
            'Lucida Sans Unicode, Lucida Grande, sans-serif',
            'Tahoma, Geneva, sans-serif',
            'Times New Roman, Times, serif',
            'Trebuchet MS, Helvetica, sans-serif',
            'Verdana, Geneva, sans-serif',
            'Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif'
          ],
          supportAllValues: true
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
        // default language: 'en',
        // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
        image: {
          resizeUnit: '%',
          resizeOptions: [
            {
              name: 'resizeImage:original',
              value: null,
              icon: 'original'
            },
            {
              name: 'resizeImage:25',
              value: '25',
              icon: 'small'
            },
            {
              name: 'resizeImage:50',
              value: '50',
              icon: 'medium'
            },
            {
              name: 'resizeImage:75',
              value: '75',
              icon: 'large'
            }
          ],
          toolbar: [
            'toggleImageCaption',
            'imageTextAlternative',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            'linkImage',
            'resizeImage:25',
            'resizeImage:50',
            'resizeImage:75',
            'resizeImage:original'
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties',
            'toggleTableCaption'
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
        heading: {
          options: [
            {
              model: 'heading1',
              view: 'h1',
              title: 'Heading 1',
              class: 'ck-heading_heading1'
            },
            {
              model: 'heading2',
              view: 'h2',
              title: 'Heading 2',
              class: 'ck-heading_heading2'
            },
            {
              model: 'heading3',
              view: 'h3',
              title: 'Heading 3',
              class: 'ck-heading_heading3'
            },
            {
              model: 'heading4',
              view: 'h4',
              title: 'Heading 4',
              class: 'ck-heading_heading4'
            },
            {
              model: 'heading5',
              view: 'h5',
              title: 'Heading 5',
              class: 'ck-heading_heading5'
            }
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
        // Regular expressions (/.*/  /^(p|h[2-4])$/' etc) for htmlSupport does not allowed in this config
        htmlSupport: {
          allow: [
            {
              name: 'img',
              attributes: {
                sizes: true,
                loading: true
              }
            }
          ]
        }
      },
      plugin: {
        styles: `
          [style*="color:hsl(0,0%,100%)"] {
            text-shadow: #000 0px 0px 2px;
            -webkit-background-clip: text;
            -moz-background-clip: text;
            background-clip: text;
          }
        `
      }
    }
  },
  graphql: {
    enabled: true,
    config: {
      apolloServer: {
        tracing: false,
        introspection: true
      }
    }
  }
});
