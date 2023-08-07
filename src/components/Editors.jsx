import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './inicialContent'
import { lowlight } from 'lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-dark.css'
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble
} from 'react-icons/rx'


lowlight.registerLanguage('js', js)


export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      })
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      }
      
    }
}) 

  return (
    <>
      <EditorContent 
        className="max-w-[700px] mx-auto pt-16 prose prose-sky"
        editor={editor} 
      />
      {editor ? 
      <FloatingMenu 
        editor={editor}
        className='bg-white py-2 px-1 gap-1 shadow-xl shadow-black/30 border border-zinc-300 rounded-lg overflow-hidden flex flex-col'
        shouldShow={({state}) => {
          const { $from } = state.selection
          const currentLineText = $from.nodeBefore?.textContent

          return currentLineText === '/'
        }}
      >
        <button 
        className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-100'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        data-active={editor.isActive('bulletList')}
        >
          <img 
            src="https://www.notion.so/images/blocks/bulleted-list.0e87e917.png" 
            alt="Bulleted list"
            className='w-12 border border-zinc-200 rounded' />
          <div className='flex flex-col text-left text-zinc-600'>
            <span className='text-sm text-zinc-900'>Bulleted list</span>
            <span className='text-xs text-zinc-600'>Create a simple bulleted list.</span>
          </div>
        </button>

        <button 
          className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-100'
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          
        >
          <img 
            src="https://www.notion.so/images/blocks/header.57a7576a.png" 
            alt="Heading 1"
            className='w-12 border border-zinc-200 rounded' />
          <div className='flex flex-col text-left text-zinc-600'>
            <span className='text-sm text-zinc-900'>Heading 1</span>
            <span className='text-xs text-zinc-600'>Big section heanding.</span>
          </div>
        </button>

        <button 
        className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-100'
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          <img 
            src="https://www.notion.so/images/blocks/subheader.9aab4769.png" 
            alt="Heading 2"
            className='w-12 border border-zinc-200 rounded' />
          <div className='flex flex-col text-left text-zinc-600'>
            <span className='text-sm text-zinc-900'>Heading 2</span>
            <span className='text-xs text-zinc-600'>Medium section heanding.</span>
          </div>
        </button>
      </FloatingMenu> : ""}


      { editor? <BubbleMenu className='bg-white shadow-xl shadow-black/30 border border-zinc-200 rounded-lg overflow-hidden flex divide-x divide-zinc-200 ' editor={editor}>
        
        <button className='p-2 text-zinc-600 text-sm flex align-items-center gap-1.5 font-medium leadind-none hover:text-zinc-600 hover:bg-zinc-100 flex items-center'>
            Text
            <RxChevronDown className='w-4 h-4'/>
        </button>
        <button className='p-2 text-zinc-600 text-sm flex align-items-center gap-1.5 font-medium leadind-none hover:text-zinc-600 hover:bg-zinc-100 flex items-center'>
            <RxChatBubble className='w-4 -4'/>
            Coment
        </button>
        <div className='flex '>
          <button className='p-2 text-zinc-600 text-sm flex align-items-center gap-1.5 font-medium leadind-none hover:text-zinc-600 hover:bg-zinc-200 flex items-center data-[active=true]:text-sky-400' 
            onClick={() => editor.chain().focus().toggleBold().run()}
            data-active={editor.isActive('bold')} 
          >
            <RxFontBold className='w-4 h-4'/>
          </button>
          <button className='p-2 text-zinc-600 text-sm flex align-items-center gap-1.5 font-medium leadind-none hover:text-zinc-600 hover:bg-zinc-200 items-center data-[active=true]:text-sky-400'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          data-active={editor.isActive('italic')} 
          >
            <RxFontItalic className='w-4 h-4'/>
          </button >
          <button className='p-2 text-zinc-600 text-sm flex align-items-center gap-1.5 font-medium leadind-none hover:text-zinc-600 hover:bg-zinc-200 items-center data-[active=true]:text-sky-400' 
            onClick={() => editor.chain().focus().toggleStrike().run()}
            data-active={editor.isActive('strike')}
          >
            <RxStrikethrough className='w-4 h-4'/>
          </button>
          <button className='p-2 text-zinc-600 text-sm flex align-items-center gap-1.5 font-medium leadind-none hover:text-zinc-600 hover:bg-zinc-200 items-center data-[active=true]:text-sky-400' 
            onClick={() => editor.chain().focus().toggleCode().run()}
            data-active={editor.isActive('code')}>
            <RxCode className='w-4 h-4'/>
          </button>
        </div>
      </ BubbleMenu> : ''}
    </>

  )
}