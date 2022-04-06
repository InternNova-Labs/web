import { ReactElement } from "react"

interface PopupProps {
  title: string
  step?: number
  scroll: boolean
  children: ReactElement
}

export const Popup = ({ title, children, step, scroll, ...props }: PopupProps) => (
  <div className="grid overflow-hidden fixed top-0 left-0 place-items-center w-screen h-screen select-none popup">
    <div
      {...props}
      className={`rounded-xl bg-slate-100 shadow-[#8a8a8a] shadow-sm h-[85%] ${
        scroll ? " overflow-y-scroll overflow-x-hidden" : "overflow-hidden"
      }`}
    >
      <div className="flex justify-between items-center px-8 pt-4">
        <h2 className="font-medium">{title}</h2>
        {step && <p>Step {step} of 2</p>}
      </div>

      {children}
    </div>
  </div>
)