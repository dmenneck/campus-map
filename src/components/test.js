return (
  <div id="rooms">
    <div></div>

    <div>
      <div id="toggle-rooms-btn-container">
        <button
          onClick={toggleRoomsOne}
          className={etageOneHasFeatures ? "toggle-rooms-btn" : "hide"}
        >
          1. Etage
        </button>
        <button
          onClick={toggleRoomsTwo}
          className={etageTwoHasFeatures ? "toggle-rooms-btn" : "hide"}
        >
          2. Etage
        </button>
        <button
          onClick={toggleRoomsThree}
          className={etageThreeHasFeatures ? "toggle-rooms-btn" : "hide"}
        >
          3. Etage
        </button>
        <p className={noRooms ? "no-rooms" : "hide"}>
          Für dieses Gebäude liegen noch keine Rauminformationen vor.
        </p>
      </div>

      <div className={btnClicked ? "rooms-input" : "hide"}>
        <input
          placeholder="Suche MitarbeiterIn..."
          value={search}
          onChange={searchInput}
          id="rooms-input-search"
        />

        <button onClick={resetInput} className="rooms-input-btns">
          {`<`}
        </button>
        <button onClick={closeSearchBar} className="rooms-input-btns">
          X
        </button>
      </div>

      <div
        id="rooms-data-container"
        className={btnClicked ? "rooms-input" : "hide"}
      >
        {filteredNames.map((item, index) => (
          <div key={index} id="rooms-data-grid" className="room-data-items">
            <div
              href={item.link}
              key={index}
              title={item.names}
              className="room-numbers"
              onMouseEnter={styleHoveredFeature}
            >
              Raum {item.room_num}
            </div>
            <div>
              <button
                onClick={showRoomData}
                className="hide-content"
                style={{
                  backgroundImage: `url(${information})`,
                  backgroundSize: "75%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  display: "inline",
                }}
              >
                {/* next line is being ignored. Code still needs do be there otherwise doesnt work*/}
                {item.names}
              </button>
              <button
                onClick={getExtent}
                className="hide-content"
                style={{
                  backgroundImage: `url(${geolocation})`,
                  backgroundSize: "75%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  display: "inline",
                }}
              >
                {/* next line is being ignored. Code still needs do be there otherwise doesnt work*/}
                {item.names}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Drawer
        title="Rauminformationen"
        placement="right"
        onClose={onClose}
        visible={drawerVisibility}
        getContainer={false}
        width="600px"
      >
        <p id="room-number">Raum: {roomNumber}</p>
        <RoomsContainer />
      </Drawer>
    </div>
  </div>
);
