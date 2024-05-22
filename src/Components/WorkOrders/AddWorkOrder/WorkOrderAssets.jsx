import React, { useEffect, useState } from "react";
import DownIcon from "../../../Assets/Icons/DownIcon";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import store from "../../../context";
import { useRecoilState } from "recoil";
import { apiWorkOrderServices } from "../../../utls/services";

const WorkOrderAssets = () => {
  const [selectValue, setSelectValue] = useState({
    asset: "Select",
    location: "Select",
    assetCategory: "Select",
    assignAdditionalTeam: "Select",
  });
  const [workOrderAssets, setWorkOrderAssets] = useRecoilState(
    store.workOrderAssets
  );
  const [locatonAndAssetCategoryIds, setlocatonAndAssetCategoryIds] =
    useRecoilState(store.locatonAndAssetCategoryIds);

  const [selectedAssets, setSelectedAssets] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Select");
  const [selectedAssetCategory, setSelectedAssetCategory] = useState("Select");

  // Form Data
  const [locationData, setLocationData] = useState([]);
  const [assetData, setAssetData] = useState([]);
  const [assetCheckData, setAssetCheckData] = useState([]);
  //location search input
  const [locationSearch, setLocationSearch] = useState("");
  //asset category search input
  const [assetSearch, setAssetSearch] = useState("");
  //asset search input
  const [assetCheckSearch, setAssetCheckSearch] = useState("");

  const LOCATION_ENDPOINT = "Locations/LocationsList";
  const ASSETS_CATEGORIES_ENDPOINT = "Assets/Categories";
  const ASSETS_ENDPOINT = "Assets/GetAssetsByLocationAndCategory";

  const handleCheckboxChange = (asset) => {
    setSelectedAssets((prevSelectedAssets) => {
      if (prevSelectedAssets.includes(asset)) {
        return prevSelectedAssets.filter(
          (selectedAsset) => selectedAsset !== asset
        );
      } else {
        return [...prevSelectedAssets, asset];
      }
    });
  };

  const handleLocationSelect = (eventKey) => {
    setSelectedLocation(eventKey);
    setSelectValue({ ...selectValue, location: eventKey });
    setLocationSearch("");
  };

  const handleAssetCategorySelect = (eventKey) => {
    setSelectedAssetCategory(eventKey);
    setSelectValue({ ...selectValue, assetCategory: eventKey });
    setAssetSearch("");
  };

  const updateFormData = async () => {
    const LocationDataRes = await apiWorkOrderServices(
      LOCATION_ENDPOINT,
      "GET"
    );
    const AssetCategoriesRes = await apiWorkOrderServices(
      ASSETS_CATEGORIES_ENDPOINT,
      "GET"
    );
    setLocationData(LocationDataRes);
    setAssetData(AssetCategoriesRes);
  };

  const updateAssetsList = async (selectedLocation, selectedAssetCategory) => {
    if (selectedLocation !== "Select" && selectedAssetCategory !== "Select") {
      const selectedLocationId = locationData.find(
        (item) => item.locationName === selectedLocation
      ).id;
      const selectedAssetCategoryId = assetData.find(
        (item) => item.assetCategoryName === selectedAssetCategory
      ).id;
      const url = `${ASSETS_ENDPOINT}/${selectedLocationId}/${selectedAssetCategoryId}`;
      setlocatonAndAssetCategoryIds([
        selectedLocationId,
        selectedAssetCategoryId,
      ]);
      const AssetsRes = await apiWorkOrderServices(url, "GET");
      setAssetCheckData(AssetsRes);
    }
  };

  useEffect(() => {
    updateFormData();
  }, []);

  useEffect(() => {
    updateAssetsList(selectedLocation, selectedAssetCategory);
  }, [selectedLocation, selectedAssetCategory]);

  //Filter location data
  const filteredLocationData = locationData.filter((item) => {
    return item.locationName
      .toLowerCase()
      .includes(locationSearch.toLowerCase());
  });
  //Filter asset data
  const filteredAssetData = assetData.filter((item) => {
    return item.assetCategoryName
      .toLowerCase()
      .includes(assetSearch.toLowerCase());
  });
  //Filter asset check data
  const filteredAssetCheckData = assetCheckData.filter((item) => {
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
              {selectedLocation}
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
                {filteredLocationData.map((item, index) => (
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
                  <Dropdown.Item key={index} eventKey={item.assetCategoryName}>
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
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default WorkOrderAssets;
