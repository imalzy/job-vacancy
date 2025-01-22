export interface IUPAPIResponse {
  id?:              string;
  jobid?:           string;
  title?:           string;
  alias?:           string;
  startpublishing?: Date;
  created?:         Date;
  cat_id?:          string | number | null;
  cat_title?:       string;
  cat_alias?:       string;
  company?:         null;
  companyalias?:    null;
  compid?:          null;
  companyurl?:      null;
  address1?:        null;
  logo?:            null;
  compuid?:         null;
  jobtype?:         string;
  jtpalias?:        string;
  city?:            string;
  city_alias?:      string;
  country?:         string;
}
