import React, { useState, useEffect, useContext } from "react";
import DownIcon from "../../../Assets/Icons/DownIcon";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import { WorkOrderFormContext } from "../../../Providers/WorkOrderFormProvider";
import { get } from "../../../Pages/Services/ApiHelper";

const WorkOrderAssets = () => {
  const {formData, setFormData } = useContext(WorkOrderFormContext)

  const [selectValue, setSelectValue] = useState({
    asset: "Select",
    location: formData.location.locationName === '' ? "Select": formData.location.locationName,
    assetCategory: formData.assetCategory.categoryName === '' ? 'Select': formData.assetCategory.categoryName,
    assignAdditionalTeam: "Select",
  });

  const [selectedAssets, setSelectedAssets] = useState(formData.assetList.length < 1 ? [] : formData.assetList.map(value => value.assetName));
  const [selectedLocation, setSelectedLocation] = useState(formData.location.locationName === '' ? "Select": formData.location.locationName);
  const [selectedAssetCategory, setSelectedAssetCategory] = useState(formData.assetCategory.categoryId === '' ? 'Select': formData.assetCategory.categoryName);

  

  //location data options 
  const [locationData, setLocationData] = useState([])
  const [assetData, setAssetData] = useState([])
  const [assetCheckData, setAssetCheckData] = useState([])

  //location search input
  const [locationSearch, setLocationSearch] = useState("");
  //asset category search input
  const [assetSearch, setAssetSearch] = useState("");
  //asset search input
  const [assetCheckSearch, setAssetCheckSearch] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('bearerToken')
    if (!token) {
      return
    }

    get('https://saharadeskbackend.azurewebsites.net/api/Locations/LocationsList', token)
    .then( data => {
      setLocationData(data)
    })
    
    get('https://saharadeskbackend.azurewebsites.net/api/Assets/Categories', token)
    .then(data => {
      setAssetData(data)
    })
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('bearerToken')
    if (!token) {
      return
    }

    if ( formData.location.locationId === null || formData.assetCategory.categoryId === null){
      return
    }
    get(
      `https://saharadeskbackend.azurewebsites.net/api/Assets/GetAssetsByLocationAndCategory/${formData.location.locationId}/${formData.assetCategory.categoryId}`,
      token
    ).then(data => {
      setAssetCheckData(data)
    })
  }, [formData.location.locationId, formData.assetCategory.categoryId, formData])


  const handleCheckboxChange = (assetName, assetId) => {
    setSelectedAssets((prevSelectedAssets) => {
      if (prevSelectedAssets.includes(assetName)) {
        return prevSelectedAssets.filter(
          (selectedAsset) => selectedAsset !== assetName
        );
      } else {
        
        return [...prevSelectedAssets, assetName];
        
      }
    });

    // update form State
    setFormData((prevState) => {
      const assetExists = prevState.assetList.some(
        (asset) => asset.assetListId === assetId
      );

      let updatedAssetList;
      if (assetExists) {
        updatedAssetList = prevState.assetList.filter(
          (asset) => asset.assetListId !== assetId
        );
        // console.log(updatedAssetList.length())
      } else {
        updatedAssetList = [
          ...prevState.assetList,
          { assetName : assetName, assetListId: assetId },
        ];
      }
      return {
        ...prevState,
        assetList: updatedAssetList
      }
    })
  };

  const handleLocationSelect = (eventKey) => {
    const values = eventKey.split('$')
    setSelectedLocation(values[1]);
    setSelectValue({ ...selectValue, location: values[1] });
    setLocationSearch("");
    setFormData({
      ...formData, 
      location: {
        locationName: values[1],
        locationId: Number(values[0])
      }
    })
  };

  const handleAssetCategorySelect = (eventKey) => {
    const values = eventKey.split('$')
    setSelectedAssetCategory(values[1]);
    setSelectValue({ ...selectValue, assetCategory: values[1] });
    setAssetSearch("");
    setFormData({
      ...formData,
      assetCategory: {
        categoryName: values[1],
        categoryId: Number(values[0])
      }
    })
  };

  //Filter location data
  const filteredLocationData = locationData.filter((item) => {
    return item.locationName.toLowerCase().includes(locationSearch.toLowerCase());
  });
  //Filter asset data
  const filteredAssetData = assetData.filter((item) => {
    return item.assetCategoryName.toLowerCase().includes(assetSearch.toLowerCase());
  });
  //Filter asset check data
  const filteredAssetCheckData = assetCheckData.filter((item) => {
    return item.assetName.toLowerCase().includes(assetCheckSearch.toLowerCase());
  });

  return (
    <div className="order-details-content pb-lg-4">
      <div className="fs-16 fw-semibold">Assets</div>
      <div className="row details-forms-one pt-5">
        <div className="fs-15 fw-regular">
          Work Request Ref ID:{" "}
          <span className="fw-bold ps-4" style={{ color: "#867D77" }}>
            Not Available
          </span>
        </div>
        <div className="col-md-6">
          <label>Location</label>
          <Dropdown className="select__form" onSelect={handleLocationSelect}>
            <Dropdown.Toggle
              className={`select-title ${
                selectedLocation !== "Select" ? "selected" : ""
              }`}
            >
              {selectedLocation}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <form className="dropdown-search">
                <button disabled> 
                  <SearchIcon />
                </button>
                <input
                  value={formData.location.locationName}
                  onChange={(e) => setLocationSearch(e.target.value)}
                  type="text"
                  placeholder="Search"
                />
              </form>
              <div className="dropdown-item-content">
                {filteredLocationData.map((item, index) => (
                  <Dropdown.Item key={index} eventKey={item.id + '$' + item.locationName}>
                    {item.locationName}
                  </Dropdown.Item>
                ))}
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-lg-6 m-none"></div>
        <div className="col-md-6">
          <label>Asset Category</label>
          <Dropdown
            className="select__form"
            onSelect={handleAssetCategorySelect}
          >
            <Dropdown.Toggle
              className={`select-title ${
                selectedAssetCategory !== "Select" ? "selected" : ""
              }`}
            >
              {selectedAssetCategory}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <form className="dropdown-search">
                <button disabled>
                  <SearchIcon />
                </button>
                <input
                  onChange={(e) => setAssetSearch(e.target.value)}
                  type="text"
                  placeholder="Search"
                  value={assetSearch}
                />
              </form>
              <div className="dropdown-item-content">
                {filteredAssetData.map((item, index) => (
                  <Dropdown.Item key={index} eventKey={item.id + '$' + item.assetCategoryName}>
                    {item.assetCategoryName}
                  </Dropdown.Item>
                ))}
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {selectValue.location !== "Select" &&
          selectValue.assetCategory !== "Select" && (
            <div className="col-md-6">
              <label>Asset (s)</label>

              <div className="dropdown Checklists-dropdown assets-checklist select__form">
                <button
                  className="btn checklists-btn"
                  data-bs-toggle="dropdown"
                >
                  <div>
                    Select {"  "}
                    {selectedAssets.length > 0 && (
                      <span style={{ color: "#000" }}>
                        {selectedAssets.join(", ")}
                      </span>
                    )}{" "}
                  </div>
                  <DownIcon />
                </button>
                <ul className="dropdown-menu">
                  <form className="dropdown-search ps-0">
                    <button disabled>
                      <SearchIcon />
                    </button>
                    <input
                      onChange={(e) => setAssetCheckSearch(e.target.value)}
                      type="text"
                      placeholder="Search"
                      value={assetCheckSearch}
                    />
                  </form>
                  <ul className="dropdown-item-content">
                    {filteredAssetCheckData.map((item, index) => (
                      <li key={index}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id={item.assetName}
                            checked={selectedAssets.includes(item.assetName)}
                            onChange={() => handleCheckboxChange(item.assetName, item.id)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={item.assetName}
                          >
                            {item.assetName}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
            </div>
          )}
      </div>

      <div className="details-buttons pt-lg-5">
        <Link
          to="/work-orders/add-work-order/details"
          className="next-btn mt-lg-5"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default WorkOrderAssets;
