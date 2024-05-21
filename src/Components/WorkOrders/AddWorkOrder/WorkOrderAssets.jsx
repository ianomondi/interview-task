import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownIcon from "../../../Assets/Icons/DownIcon";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import usefetchData from "../../../hooks/useFetchData";
import {
  setAssetCategory,
  setLocation,
  setSelectedAssets,
} from "../../../redux/formSlice";

const WorkOrderAssets = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);

  console.log("formstate", formState)

  const [selectValue, setSelectValue] = useState({
    asset: "Select",
    location: "Select",
    assetCategory: "Select",
    assignAdditionalTeam: "Select",
  });

  const [selectedAssets, setSelectedAssets] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Select");
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [selectedAssetCategory, setSelectedAssetCategory] = useState("Select");
  const [selectedAssetCategoryId, setSelectedAssetCategoryId] = useState(null);

  //location search input
  const [locationSearch, setLocationSearch] = useState("");
  //asset category search input
  const [assetSearch, setAssetSearch] = useState("");
  //asset search input
  const [assetCheckSearch, setAssetCheckSearch] = useState("");

  const routeState = {
    locationId: selectedLocationId,
    categoryofworkId: selectedAssetCategoryId,
  };

  const handleCheckboxChange = (assetName) => {
    const asset = assetCheckData.find((item) => item.assetName === assetName);

    if (!asset) return; // If asset not found, exit the function

    const assetId = asset.id;
    setSelectedAssets((prevSelectedAssets) => {
      if (prevSelectedAssets.includes(assetName)) {
        return prevSelectedAssets.filter(
          (selectedAsset) => selectedAsset !== assetName
        );
      } else {
        return [...prevSelectedAssets, assetName];
      }
    });
    const updatedAssets = formState.selectedAssets.includes(assetId)
      ? formState.selectedAssets.filter(
          (selectedAssetId) => selectedAssetId !== assetId
        )
      : [...formState.selectedAssets, assetId];

    console.log("updated assets", updatedAssets);

    // dispatch(setSelectedAssets(updatedAssets));
  };

  const handleLocationSelect = (eventKey, event) => {
    const location = locationData.find(
      (item) => item.locationName === eventKey
    );
    setSelectedLocation(location.locationName);
    setSelectedLocationId(location.id);
    setSelectValue({ ...selectValue, location: location.locationName });
    dispatch(
      setLocation({ location: location.locationName, locationId: location.id })
    );
    setLocationSearch("");
  };

  const handleAssetCategorySelect = (eventKey, event) => {
    const assetCategory = assetData.find(
      (item) => item.assetCategoryName === eventKey
    );
    setSelectedAssetCategory(assetCategory.assetCategoryName);
    setSelectedAssetCategoryId(assetCategory.id);
    setSelectValue({
      ...selectValue,
      assetCategory: assetCategory.assetCategoryName,
    });
    setAssetSearch("");
    dispatch(
      setAssetCategory({
        assetCategory: assetCategory.assetCategoryName,
        assetCategoryId: assetCategory.id,
      })
    );
    setAssetSearch("");
  };

  const { data: locationData } = usefetchData(
    ["location"],
    `/Locations/LocationsList`,
    {},
    "Couldn't get location data. Please try again!",
    true
  );

  const { data: assetData } = usefetchData(
    ["assets"],
    `/Assets/Categories`,
    {},
    "Couldn't get asset category data. Please try again!",
    true
  );

  const { data: assetCheckData } = usefetchData(
    ["asset-check", selectedLocationId, selectedAssetCategoryId],
    `/Assets/GetAssetsByLocationAndCategory/${selectedLocationId}/${selectedAssetCategoryId}`,
    {},
    "Couldn't get asset data. Please try again!",
    !!selectedLocationId && !!selectedAssetCategoryId // Fetch data only when both IDs are available
  );

  // Filter location data
  const filteredLocationData =
    locationData &&
    locationData.filter((item) => {
      return item.locationName
        .toLowerCase()
        .includes(locationSearch.toLowerCase());
    });

  // Filter asset data
  const filteredAssetData =
    assetData &&
    assetData.filter((item) => {
      return item.assetCategoryName
        .toLowerCase()
        .includes(assetSearch.toLowerCase());
    });

  // Filter asset check data
  const filteredAssetCheckData =
    assetCheckData &&
    assetCheckData.filter((item) => {
      return item.assetName
        .toLowerCase()
        .includes(assetCheckSearch.toLowerCase());
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
              {formState.location}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <form className="dropdown-search">
                <button disabled>
                  <SearchIcon />
                </button>
                <input
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                  type="text"
                  placeholder="Search"
                />
              </form>
              <div className="dropdown-item-content">
                {filteredLocationData &&
                  filteredLocationData.map((item, index) => (
                    <Dropdown.Item key={index} eventKey={item.locationName}>
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
              {formState.assetCategory}
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
                {filteredAssetData &&
                  filteredAssetData.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      eventKey={item.assetCategoryName}
                    >
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
                    {filteredAssetCheckData &&
                      filteredAssetCheckData.map((item, index) => (
                        <li key={index}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id={item.assetName}
                              checked={selectedAssets.includes(item.assetName)}
                              onChange={() =>
                                handleCheckboxChange(item.assetName)
                              }
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
          state={routeState}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default WorkOrderAssets;
