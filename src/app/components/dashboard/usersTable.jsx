const UsersTable = () => {
    return ( <>
        <div class="claim-records">

<div class="claims-top">
  <form action="" class="form">
    <div class="fm-ctrl">
      <label for="claim-id">Claim ID</label> <br />
      <div class="input-hold">
        <input type="search" />
        <div class="search-icon">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.16438 0.894531C9.18026 0.894531 11.6256 3.33931 11.6256 6.35579C11.6256 9.37227 9.18026 11.8171 6.16438 11.8171C3.1479 11.8171 0.703125 9.37227 0.703125 6.35579C0.703125 3.33931 3.1479 0.894531 6.16438 0.894531Z"
              stroke="#B5B5B5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.6658 10.9568C12.1628 10.9568 12.5656 11.3602 12.5656 11.8566C12.5656 12.3541 12.1628 12.757 11.6658 12.757C11.1688 12.757 10.7654 12.3541 10.7654 11.8566C10.7654 11.3602 11.1688 10.9568 11.6658 10.9568Z"
              stroke="#B5B5B5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="fm-ctrl">
      <label for="claim-id">Status</label> <br />
      <select name="" id="">
        <option value="">
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.05589 6.60339H3.69287"
              stroke="black"
              stroke-width="0.935065"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.0459 4.45755C6.0459 4.45755 8.05549 5.90365 8.05549 6.60382C8.05549 7.30399 6.0459 8.7478 6.0459 8.7478"
              stroke="black"
              stroke-width="0.935065"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.87435 11.895C9.578 11.895 10.8129 10.5719 10.8129 6.60371C10.8129 2.63551 9.578 1.31239 5.87435 1.31239C2.1707 1.31239 0.935791 2.63551 0.935791 6.60371C0.935791 10.5719 2.1707 11.895 5.87435 11.895Z"
              stroke="black"
              stroke-width="0.935065"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          All
        </option>
        <option value="">Active</option>
        <option value="">Pending</option>
        <option value="">Drafts</option>
      </select>
    </div>
    <div class="fm-ctrl">
      <label for="">Filters</label>
      <div class="filters">
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.77768 10.8398H1.39062"
            stroke="#130F26"
            stroke-width="0.95689"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.52991 10.8405C8.52991 12.3873 8.99142 12.9024 10.3747 12.9024C11.758 12.9024 12.2195 12.3873 12.2195 10.8405C12.2195 9.29381 11.758 8.77869 10.3747 8.77869C8.99142 8.77869 8.52991 9.29381 8.52991 10.8405Z"
            stroke="#130F26"
            stroke-width="0.95689"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.83469 2.89407H12.2211"
            stroke="#130F26"
            stroke-width="0.95689"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.08087 2.89291C5.08087 1.34686 4.61936 0.831055 3.23605 0.831055C1.85213 0.831055 1.39062 1.34686 1.39062 2.89291C1.39062 4.43965 1.85213 4.95477 3.23605 4.95477C4.61936 4.95477 5.08087 4.43965 5.08087 2.89291Z"
            stroke="#130F26"
            stroke-width="0.95689"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </form>
  <div class="record-file-view">
    <button class="file-claim-btn">View Heat-map</button>
    <button class="file-claim-btn">Create New Quote</button>
  </div>
</div>
<div class="record-table">
  <table>
    <thead>
      <tr>
        <th class="tbl-form">
          <div class="keep-me">
            <label class="ctn-check">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </th>
        <th>Client</th>
        <th>Business name</th>
        <th>Location</th>
        <th>Coverages</th>
        <th>Expiration</th>
        <th>Premium</th>
        <th>Status</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tbl-form">
          <div class="keep-me">
            <label class="ctn-check">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </td>
        <td>Roy Muturi</td>
        <td>ABC Africa</td>
        <td>Kilua, Karen, Nairobi KE</td>
        <td>GL</td>
        <td>23/09/2023</td>
        <td class="red">$6,737.89</td>
        <td class="green">Active</td>
        <td>
          <button class="view">View</button>
        </td>
        <td>
          <button>
            <svg
              width="15"
              height="4"
              viewBox="0 0 15 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5794 2.15813H13.5966"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.83805 2.15813H7.85527"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.09672 2.15813H2.11394"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </td>
      </tr>
      <tr>
        <td class="tbl-form">
          <div class="keep-me">
            <label class="ctn-check">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </td>
        <td>Roy Muturi</td>
        <td>ABC Africa</td>
        <td>Kilua, Karen, Nairobi KE</td>
        <td>GL</td>
        <td>23/09/2023</td>
        <td>$6,737.89</td>
        <td class="green">Active</td>
        <td>
          <button class="view">View</button>
        </td>
        <td>
          <button>
            <svg
              width="15"
              height="4"
              viewBox="0 0 15 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5794 2.15813H13.5966"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.83805 2.15813H7.85527"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.09672 2.15813H2.11394"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </td>
      </tr>
      <tr>
        <td class="tbl-form">
          <div class="keep-me">
            <label class="ctn-check">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </td>
        <td>Roy Muturi</td>
        <td>ABC Africa</td>
        <td>Kilua, Karen, Nairobi KE</td>
        <td>GL</td>
        <td>23/09/2023</td>
        <td class="grey">$6,737.89</td>
        <td class="red">Expired</td>
        <td>
          <button class="view">View</button>
        </td>
        <td>
          <button>
            <svg
              width="15"
              height="4"
              viewBox="0 0 15 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5794 2.15813H13.5966"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.83805 2.15813H7.85527"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.09672 2.15813H2.11394"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </td>
      </tr>
      <tr>
        <td class="tbl-form">
          <div class="keep-me">
            <label class="ctn-check">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </td>
        <td>Roy Muturi</td>
        <td>ABC Africa</td>
        <td>Kilua, Karen, Nairobi KE</td>
        <td>GL</td>
        <td>23/09/2023</td>
        <td class="green">$6,737.89</td>
        <td class="green">Active</td>
        <td>
          <button class="view">View</button>
        </td>
        <td>
          <button>
            <svg
              width="15"
              height="4"
              viewBox="0 0 15 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5794 2.15813H13.5966"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.83805 2.15813H7.85527"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.09672 2.15813H2.11394"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </td>
      </tr>
      <tr>
        <td class="tbl-form">
          <div class="keep-me">
            <label class="ctn-check">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </td>
        <td>Roy Muturi</td>
        <td>ABC Africa</td>
        <td>Kilua, Karen, Nairobi KE</td>
        <td>GL</td>
        <td>23/09/2023</td>
        <td>$6,737.89</td>
        <td class="grey">Pending</td>
        <td>
          <button class="view">View</button>
        </td>
        <td>
          <button>
            <svg
              width="15"
              height="4"
              viewBox="0 0 15 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5794 2.15813H13.5966"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.83805 2.15813H7.85527"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.09672 2.15813H2.11394"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </td>
      </tr>
      <tr>
        <td class="tbl-form">
          <div class="keep-me">
            <label class="ctn-check">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </td>
        <td>Roy Muturi</td>
        <td>ABC Africa</td>
        <td>Kilua, Karen, Nairobi KE</td>
        <td>GL</td>
        <td>23/09/2023</td>
        <td>$6,737.89</td>
        <td class="yellow">Expiring in 4 Days</td>
        <td>
          <button class="view">View</button>
        </td>
        <td>
          <button>
            <svg
              width="15"
              height="4"
              viewBox="0 0 15 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5794 2.15813H13.5966"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.83805 2.15813H7.85527"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.09672 2.15813H2.11394"
                stroke="#797979"
                stroke-width="2.74627"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
<div class="record-pagination">
<div class="rec-pg-contain">
  <div class="record-num">Records: 1-7 of 7</div>
  <div class="record-pg">
    <div class="rec-pg-select">
      <button>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.68488 1.44873L0.835938 5.29767L4.68488 9.14662"
            stroke="#8F8F8F"
            stroke-width="0.962236"
            stroke-linecap="round"
          />
          <path
            d="M9.49738 1.44873L5.64844 5.29767L9.49738 9.14662"
            stroke="#8F8F8F"
            stroke-width="0.962236"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <button>
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.17707 1.44873L1.32812 5.29767L5.17707 9.14662"
            stroke="#8F8F8F"
            stroke-width="0.962236"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
    <div class="rec-pg-num">
      <span>Page</span>
      <input type="text" value="1" />
      <span>of 1</span>
    </div>
    <div class="rec-pg-select">
      <button>
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.72137 9.10889L4.57031 5.25994L0.721371 1.411"
            stroke="#8F8F8F"
            stroke-width="0.962236"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <button>
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.20574 9.10889L10.0547 5.25994L6.20575 1.411"
            stroke="#8F8F8F"
            stroke-width="0.962236"
            stroke-linecap="round"
          />
          <path
            d="M1.40106 9.10889L5.25 5.25994L1.40106 1.411"
            stroke="#8F8F8F"
            stroke-width="0.962236"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
</div></> );
}
 
export default UsersTable;