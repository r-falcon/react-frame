import { useEffect } from 'react'

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `count is:${count}`
  }, [count])
}

export default useDocumentTitle
