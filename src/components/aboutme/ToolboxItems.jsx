import React, { Fragment } from 'react'
import TechIcon from './TechIcon'
import { twMerge } from 'tailwind-merge'

const ToolboxItems = ({ toolboxItems, className, itemsWrapper }) => {
  return (
    <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] overflow-hidden", className)}>
      <div className={twMerge("flex-none py-0.5", itemsWrapper)}>
        <div className="flex flex-wrap gap-6 pr-6">
          {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {toolboxItems.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg glass-box"
                >
                  <TechIcon component={item.iconType} />
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </Fragment>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default ToolboxItems
