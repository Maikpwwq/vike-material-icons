import { Counter } from './Counter'
import HouseSidingIcon from '@mui/icons-material/HouseSiding'
import DomainDisabledIcon from '@mui/icons-material/DomainDisabled'

export { Page }

function Page() {
  return (
    <>
      <h1>using Material Icons</h1>
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
        <HouseSidingIcon fontSize="medium" className="mx-2 my-1" />
        <DomainDisabledIcon fontSize="medium" className="mx-2 my-1" />
      </ul>
    </>
  )
}
