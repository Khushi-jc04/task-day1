import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Parent } from './Days/Day-3/Parent.jsx'

createRoot(document.getElementById('root')).render(
<>

<App />
<Parent/>
</>
)
