import React from 'react'
import { BsFilterLeft } from 'react-icons/bs'

function Filter() {
  return (
    <div> <div className=" theiaStickySidebar" style={{position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: 1}}>
    <div className="theiaStickySidebar" style={{paddingTop: 0, paddingBottom: 1, position: 'static', transform: 'none', top: 0, left: '48.5px'}} data-select2-id={27}><div className="listings-sidebar" data-select2-id={26}>
        <div className="card" data-select2-id={25} style={{boxShadow:" 3px 5px 13px rgba(222, 226, 231, 0.44)"}}>
          <h4><BsFilterLeft color='#b3150f' fontWeight="bold"/>Filter</h4>
          <form data-select2-id={24}>
            <div className="filter-content looking-input form-group">
              <input style={{marginTop:"10px"}} type="text" className="form-control" placeholder="What are you looking for?" />
            </div>
            <div style={{marginTop:"20px"}}className="filter-content form-group" data-select2-id={23}>
              <select className="form-control select category-select select2-hidden-accessible" tabIndex={-1} aria-hidden="true" data-select2-id={13}>
                <option value data-select2-id={15}>Choose Category</option>
                <option data-select2-id={34}>Computer</option>
                <option data-select2-id={35}>Electronics</option>
                <option data-select2-id={36}>Car wash</option>
              </select><span className="select2 select2-container select2-container--default select2-container--below" dir="ltr" data-select2-id={14} style={{width: 306}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-xtx7-container"><span className="select2-selection__rendered" id="select2-xtx7-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Choose Category</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
            </div>
            <div className="filter-content looking-input form-group input-placeholder">
              <div className="group-img">
                <input style={{marginTop:"10px"}} type="text" className="form-control" placeholder="Where to look?" />
                <i className="feather-map-pin" />
              </div>
            </div>
            <div style={{marginTop:"20px"}} className="filter-content form-group region" data-select2-id={38}>
              <select className="form-control select region-select select2-hidden-accessible" tabIndex={-1} aria-hidden="true" data-select2-id={19}>
                <option value data-select2-id={21}>Region</option>
                <option data-select2-id={39}>Canada</option>
                <option data-select2-id={40}>USA</option>
                <option data-select2-id={41}>india</option>
              </select><span className="select2 select2-container select2-container--default select2-container--below" dir="ltr" data-select2-id={20} style={{width: 306}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-rdwx-container"><span className="select2-selection__rendered" id="select2-rdwx-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Region</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
            </div>
            <div className="filter-content form-group amenities" style={{listStyleType:"none"}}>
              <h4> Amenities</h4>
              <ul style={{listStyleType:"none"}}>
                <li>
                  <label className="custom_check">
                    <input style={{marginTop:"10px"}} type="checkbox" name="wireless-internet" />
                    <span className="checkmark" /> Wireless Internet
                  </label>
                </li>
                <li>
                  <label className="custom_check">
                    <input style={{marginTop:"10px"}} type="checkbox" name="accept-credit-card" />
                    <span className="checkmark" /> Accepts Credit Cards
                  </label>
                </li>
                <li>
                  <label className="custom_check">
                    <input style={{marginTop:"10px"}} type="checkbox" name="Coupouns" />
                    <span className="checkmark" /> Coupouns
                  </label>
                </li>
                <li>
                  <label className="custom_check">
                    <input style={{marginTop:"10px"}} type="checkbox" name="parking-street" />
                    <span className="checkmark" /> Parking Street
                  </label>
                </li>
                <li>
                  <label className="custom_check">
                    <input style={{marginTop:"10px"}} type="checkbox" name="bike-parking" />
                    <span className="checkmark" /> Bike Parking
                  </label>
                </li>
                <li>
                  <label className="custom_check">
                    <input style={{marginTop:"10px"}} type="checkbox" name="Smoking-Allowed" />
                    <span className="checkmark" /> Smoking Allowed
                  </label>
                </li>
              </ul>
            </div>
           
            <div className="filter-content amenities mb-0">
              <h4> Price Range</h4>
              <div className="form-group mb-0">
                <input style={{marginTop:"10px"}} type="text" className="form-control" placeholder="Min" />
                <input style={{marginTop:"10px"}} type="text" className="form-control me-0" placeholder="Max" />
              </div>
              <div className="search-btn">
                <button className="btn btn-primary" type="submit"> <i className="fa fa-search" aria-hidden="true" /> Search</button>
                <button className="btn btn-reset mb-0" type="submit"> <i className="fas fa-light fa-arrow-rotate-right" /> Reset Filters</button>
              </div>
            </div>
          </form>
        </div>
      </div><div className="resize-sensor" style={{position: 'absolute', inset: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden'}}><div className="resize-sensor-expand" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden'}}><div style={{position: 'absolute', left: 0, top: 0, transition: 'all 0s ease 0s', width: 837, height: 1088}} /></div><div className="resize-sensor-shrink" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden'}}><div style={{position: 'absolute', left: 0, top: 0, transition: '0s', width: '200%', height: '200%'}} /></div></div></div></div>
  </div>
  )
}

export default Filter