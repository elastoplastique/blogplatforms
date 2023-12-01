export type AUTH_ERROR_CODE = 'invalidPassword';

export type LoginState = 'FAILURE' | 'SUCCESS' | 'EMAIL_VERIFICATION_REQUIRED' | 'OWNER_APPROVAL_REQUIRED';

export interface AuthResponseType {
  loginState: LoginState;
  error?: string;
  errorCodde?: string;
  data?: { [key: string]: any };
  [key: string]: any;
}
export interface AuthResponseCallbackType {
  onSuccess?: (data: any) => void;
  onFailure?: (data: any) => void;
}

export type RegisterMemberCredentials = {
  email: string;
  password: string;
};

export type LoginMemberCredentials = {
  email: string;
  password: string;
};

export interface Member {
  /**
   * Member ID.
   * @readonly
   */
  id?: string | null;
  /** Email used by the member to log in to the site. */
  loginEmail?: string | null;
  /**
   * Whether the email used by the member has been verified.
   * @readonly
   */
  loginEmailVerified?: boolean | null;
  /**
   * Member site access status.
   * <!--ONLY:REST-->
   * - `PENDING`: Member created and is waiting for approval by site owner.
   * - `APPROVED`: Member can log in to the site.
   * - `OFFLINE`: Member is a [guest author](https://support.wix.com/en/article/wix-blog-adding-guest-authors-to-your-blog) for the site blog and cannot log in to the site.
   * - `BLOCKED`: Member is blocked and cannot log in to the site.
   * - `UNKNOWN`: Insufficient permissions to get the status.
   * <!--END:ONLY:REST-->
   *
   * <!--ONLY:VELO
   * One of:
   *
   * - `"PENDING"`: Member created and is waiting for approval by site owner.
   * - `"APPROVED"`: Member can log in to the site.
   * - `"OFFLINE"`: Member is a [guest author](https://support.wix.com/en/article/wix-blog-adding-guest-authors-to-your-blog) for the site blog and cannot log in to the site.
   * - `"BLOCKED"`: Member is blocked and cannot log in to the site.
   * - `"UNKNOWN"`: Insufficient permissions to get the status.
   * <!--END:ONLY:VELO-->
   * @readonly
   */
  status?: Status;
  /**
   * Contact ID.
   * @readonly
   */
  contactId?: string | null;
  /**
   * Member's contact information. Contact information is stored in the
   * [Contact List](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
   *
   * <!--ONLY:REST-->
   * The full set of contact data can be accessed and managed with the
   * [Contacts API](https://dev.wix.com/api/rest/contacts/contacts).
   * <!--END:ONLY:REST-->
   */
  contact?: Contact;
  /** Profile display info. */
  profile?: Profile;
  /**
   * Member privacy status.
   *
   * <!--ONLY:REST-->
   * - `PUBLIC`: Member is visible to everyone.
   * - `PRIVATE`: Member is hidden from site visitors and other site members. Member is returned only to site contributors and apps with the appropriate permissions.
   * - `UNKNOWN`: Insufficient permissions to get the status.
   * <!--END:ONLY:REST-->
   *
   * <!--ONLY:VELO
   * One of:
   *
   * - `"PUBLIC"`: Member is visible to everyone.
   * - `"PRIVATE"`: Member is hidden from site visitors and other site members. Member is returned only to site contributors and apps with the appropriate permissions.
   * - `"UNKNOWN"`: Insufficient permissions to get the status.
   * <!--END:ONLY:VELO-->
   */
  privacyStatus?: PrivacyStatusStatus;
  /**
   * Member activity status.
   *
   * <!--ONLY:REST-->
   * - `ACTIVE`: Member can write forum posts and blog comments.
   * - `MUTED`: Member cannot write forum posts or blog comments.
   * - `UNKNOWN`: Insufficient permissions to get the status.
   * <!--END:ONLY:REST-->
   *
   * <!--ONLY:VELO
   * One of:
   *
   * - `"ACTIVE"`: Member can write forum posts and blog comments.
   * - `"MUTED"`: Member cannot write forum posts or blog comments.
   * - `"UNKNOWN"`: Insufficient permissions to get the status.
   * <!--END:ONLY:VELO-->
   * @readonly
   */
  activityStatus?: ActivityStatusStatus;
  /**
   * Date and time when the member was created.
   * @readonly
   */
  createdDate?: Date;
  /**
   * Date and time when the member was updated.
   * @readonly
   */
  updatedDate?: Date;
  /**
   * Date and time when the member last logged in to the site.
   * @readonly
   */
  lastLoginDate?: Date;
}
export declare enum Status {
  UNKNOWN = 'UNKNOWN',
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  BLOCKED = 'BLOCKED',
  OFFLINE = 'OFFLINE',
}
/** Contact info associated with the member. */
export interface Contact {
  /**
   * Contact ID.
   *
   * > **Deprecation notice:**
   * > This property has been replaced with `member.contactId`
   * > and will be removed on June 11, 2021.
   * @readonly
   */
  contactId?: string | null;
  /** Contact's first name. */
  firstName?: string | null;
  /** Contact's last name. */
  lastName?: string | null;
  /** List of phone numbers. */
  phones?: string[] | null;
  /** List of email addresses. */
  emails?: string[] | null;
  /** List of street addresses. */
  addresses?: Address[];
  /**
   * Contact's birthdate, formatted as `"YYYY-MM-DD"`.
   *
   * Example: `"2020-03-15"` for March 15, 2020.
   */
  birthdate?: string | null;
  /** Contact's company name. */
  company?: string | null;
  /** Contact's job title. */
  jobTitle?: string | null;
  /**
   * Custom fields,
   * where each key is the field key,
   * and each value is the field's value for the member.
   */
  customFields?: Record<string, CustomField>;
}
/** Street address. */
export interface Address extends AddressStreetOneOf {
  /** Street address object, with number and name in separate fields. */
  streetAddress?: StreetAddress;
  /** Main address line, usually street and number, as free text. */
  addressLine?: string | null;
  /**
   * Street address ID.
   * @readonly
   */
  id?: string | null;
  /**
   * Free text providing more detailed address information,
   * such as apartment, suite, or floor.
   */
  addressLine2?: string | null;
  /** City name. */
  city?: string | null;
  /**
   * Code for a subdivision (such as state, prefecture, or province) in an
   * [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
   */
  subdivision?: string | null;
  /**
   * 2-letter country code in an
   * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
   */
  country?: string | null;
  /** Postal code. */
  postalCode?: string | null;
}
/** @oneof */
export interface AddressStreetOneOf {
  /** Street address object, with number and name in separate fields. */
  streetAddress?: StreetAddress;
  /** Main address line, usually street and number, as free text. */
  addressLine?: string | null;
}
export interface StreetAddress {
  /** Street number. */
  number?: string;
  /** Street name. */
  name?: string;
}
export interface CustomField {
  /** Custom field name. */
  name?: string | null;
  /** Custom field value. */
  value?: any;
}
/** Member Profile */
export interface Profile {
  /**
   * Name that identifies the member to other members.
   * Displayed on the member's profile page
   * and interactions in the forum or blog.
   */
  nickname?: string | null;
  /**
   * Slug that determines the member's profile page URL.
   * @readonly
   */
  slug?: string | null;
  /** Member's profile photo. */
  photo?: Image;
  /**
   * Member's cover photo,
   * used as a background picture in members profile page.
   *
   * Cover positioning can be altered with `cover.offsetX` and `cover.offsetY`.
   * When left empty, the values default to `0`.
   */
  cover?: Image;
  /**
   * Member title.
   *
   * <!--ONLY:REST-->
   * Currently available through the API only.
   * <!--END:ONLY:REST-->
   */
  title?: string | null;
}
export interface Image {
  /**
   * Wix Media image ID,
   * set when the member selects an image from Wix Media.
   */
  id?: string;
  /** Image URL. */
  url?: string;
  /** Original image width. */
  height?: number;
  /** Original image height. */
  width?: number;
  /**
   * X-axis offset.
   *
   * Default: `0`.
   */
  offsetX?: number | null;
  /**
   * Y-axis offset.
   *
   * Default: `0`.
   */
  offsetY?: number | null;
}
export declare enum PrivacyStatusStatus {
  UNKNOWN = 'UNKNOWN',
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
}
export declare enum ActivityStatusStatus {
  UNKNOWN = 'UNKNOWN',
  ACTIVE = 'ACTIVE',
  MUTED = 'MUTED',
}
export interface ExtendedFields {
  /**
   * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
   * The value of each key is structured according to the schema defined when the extended fields were configured.
   *
   * You can only access fields for which you have the appropriate permissions.
   */
  namespaces?: Record<string, Record<string, any>>;
}
export interface InvalidateCache extends InvalidateCacheGetByOneOf {
  /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
  metaSiteId?: string;
  /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
  siteId?: string;
  /** Invalidate by App */
  app?: App;
  /** Invalidate by page id */
  page?: Page;
  /** Invalidate by URI path */
  uri?: URI;
  /** tell us why you're invalidating the cache. You don't need to add your app name */
  reason?: string | null;
  /** Is local DS */
  localDc?: boolean;
}
/** @oneof */
export interface InvalidateCacheGetByOneOf {
  /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
  metaSiteId?: string;
  /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
  siteId?: string;
  /** Invalidate by App */
  app?: App;
  /** Invalidate by page id */
  page?: Page;
  /** Invalidate by URI path */
  uri?: URI;
}
export interface App {
  /** The AppDefId */
  appDefId?: string;
  /** The instance Id */
  instanceId?: string;
}
export interface Page {
  /** the msid the page is on */
  metaSiteId?: string;
  /** Invalidate by Page ID */
  pageId?: string;
}
export interface URI {
  /** the msid the URI is on */
  metaSiteId?: string;
  /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
  uriPath?: string;
}
export interface UpdateMySlugRequest {
  /** New slug. */
  slug: string;
}
export interface UpdateMySlugResponse {
  /** Updated member. */
  member?: Member;
}
export interface SlugAlreadyExistsPayload {
  slug?: string;
}
export interface UpdateMemberSlugRequest {
  /** ID of the member whose slug will be updated. */
  id?: string;
  /** New slug. */
  slug?: string;
}
export interface UpdateMemberSlugResponse {
  /** Updated member. */
  member?: Member;
}
export interface JoinCommunityRequest {}
/** Member profile. */
export interface JoinCommunityResponse {
  /** The updated member. */
  member?: Member;
}
export interface MemberJoinedCommunity {
  /**
   * Member id who joined the community
   * @readonly
   */
  memberId?: string;
}
export interface LeaveCommunityRequest {}
/** Member profile. */
export interface LeaveCommunityResponse {
  /** The updated member. */
  member?: Member;
}
export interface MemberLeftCommunity {
  /**
   * Member id who left the community
   * @readonly
   */
  memberId?: string;
}
export interface GetMyMemberRequest {
  /**
   * Predefined set of fields to return.
   *
   * <!--ONLY:VELO
   * One of:
   *
   * - `"FULL"`: Returns all fields.
   * - `"PUBLIC"`: Returns `_id` and all fields under `profile`.
   *
   * > **Note:**
   * > When returning the `"PUBLIC"` fieldset,
   * > `profile.status`, `profile.privacyStatus`, and `profile.activityStatus`
   * > are returned as `"UNKNOWN"`.
   * <!--END:ONLY:VELO-->
   */
  fieldSet?: Set;
  fieldsets?: Set[];
}
export declare enum Set {
  /** Public properties of the entity */
  PUBLIC = 'PUBLIC',
  /** Extended properties of the entity */
  EXTENDED = 'EXTENDED',
  /** Full entity defined in the doc */
  FULL = 'FULL',
}
/** Member profile. */
export interface GetMyMemberResponse {
  /** The requested member. */
  member?: Member;
}
export interface GetMemberRequest {
  /** Member ID. */
  id: string;
  /**
   * Predefined set of fields to return.
   *
   * Defaults to `PUBLIC`.
   *
   * __Deprecated.__ Use `fieldsets` instead.
   * This property will be removed on March 31, 2023.
   */
  fieldSet?: Set;
  /**
   * Predefined set of fields to return.
   *
   * Defaults to `PUBLIC`.
   */
  fieldsets?: Set[];
}
export interface GetMemberResponse {
  /** The requested member. */
  member?: Member;
}
export interface MemberToMemberBlockedPayload {
  /** Member ID. */
  memberId?: string;
}
export interface ListMembersRequest {
  paging?: Paging;
  /**
   * Predefined sets of fields to return.
   *
   * Defaults to `PUBLIC`.
   *
   * __Deprecated.__ Use `fieldsets` instead.
   * This property will be removed on March 31, 2023.
   */
  fieldSet?: Set;
  /**
   * Predefined sets of fields to return.
   *
   * Defaults to `PUBLIC`.
   */
  fieldsets?: Set[];
  sorting?: Sorting[];
}
export interface Paging {
  /** Number of items to load. */
  limit?: number | null;
  /** Number of items to skip in the current sort order. */
  offset?: number | null;
}
export interface Sorting {
  /** Name of the field to sort by. */
  fieldName?: string;
  /** Sort order. */
  order?: SortOrder;
}
export declare enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}
export interface ListMembersResponse {
  /** List of members. */
  members?: Member[];
  /** Metadata for the paginated results. */
  metadata?: PagingMetadata;
}
export interface PagingMetadata {
  /** Number of items returned in the response. */
  count?: number | null;
  /** Offset that was requested. */
  offset?: number | null;
  /** Total number of items that match the query. */
  total?: number | null;
  /** Flag that indicates the server failed to calculate the `total` field. */
  tooManyToCount?: boolean | null;
}
export interface QueryMembersRequest {
  /** Query options. */
  query?: Query;
  /**
   * Predefined sets of fields to return.
   *
   * Defaults to `PUBLIC`.
   *
   * __Deprecated.__ Use `fieldsets` instead.
   * This property will be removed on March 31, 2023.
   */
  fieldSet?: Set;
  /**
   * Predefined sets of fields to return.
   *
   * Defaults to `PUBLIC`.
   */
  fieldsets?: Set[];
  /** Plain text search. */
  search?: Search;
}
export interface Query {
  /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
  filter?: any;
  /** Limit number of results */
  paging?: Paging;
  /** Sort the results */
  sorting?: Sorting[];
}
/** Free text to match in searchable fields */
export interface Search {
  /** Search term or expression */
  expression?: string | null;
  /**
   * Currently supported fields for search:
   *
   * - `loginEmail`
   * - `contact.firstName`
   * - `contact.lastName`
   * - `profile.title`
   * - `profile.nickname`
   * - `profile.slug`
   *
   * Default is `profile.nickname`
   */
  fields?: string[];
}
export interface QueryMembersResponse {
  /** List of members that met the query filter criteria. */
  members?: Member[];
  /** Metadata for the paginated results. */
  metadata?: PagingMetadata;
}
export interface MuteMemberRequest {
  id?: string;
}
export interface MuteMemberResponse {
  member?: Member;
}
export interface MemberMuted {
  /**
   * Member id who got muted
   * @readonly
   */
  memberId?: string;
}
export interface UnmuteMemberRequest {
  id?: string;
}
export interface UnmuteMemberResponse {
  member?: Member;
}
export interface MemberUnmuted {
  /**
   * Member id who got unmuted
   * @readonly
   */
  memberId?: string;
}
export interface ApproveMemberRequest {
  id?: string;
}
export interface ApproveMemberResponse {
  member?: Member;
}
export interface MemberApproved {
  /**
   * Member id who got approved
   * @readonly
   */
  memberId?: string;
}
export interface BlockMemberRequest {
  id?: string;
}
export interface BlockMemberResponse {
  member?: Member;
}
export interface MemberBlocked {
  /**
   * Member id who got blocked
   * @readonly
   */
  memberId?: string;
}
export interface MemberSelfBlockForbiddenPayload {
  /** Target's member ID. */
  memberId?: string;
}
export interface OwnerMemberBlockForbiddenPayload {
  /** Owner's member ID. */
  memberId?: string;
}
export interface ActiveSubscriptionMemberBlockForbiddenPayload {
  /** Active subscription member ID. */
  memberId?: string;
}
export interface DisconnectMemberRequest {
  id?: string;
}
export interface DisconnectMemberResponse {
  member?: Member;
}
export interface DeleteMemberRequest {
  /** ID of the member to delete. */
  id: string;
}
export interface DeleteMemberResponse {}
export interface ContentReassignmentRequested {
  fromMember?: Member;
  toMember?: Member;
}
export interface ContentDeletionRequested {
  member?: Member;
}
export interface DeleteMyMemberRequest {
  /** ID of a member receiving deleted member's content */
  contentAssigneeId?: string | null;
}
export interface DeleteMyMemberResponse {}
export interface BulkDeleteMembersRequest {
  /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
  filter?: any;
  /** ID of a member receiving deleted members' content. */
  contentAssigneeId?: string | null;
}
export interface BulkDeleteMembersResponse {
  /** Token to be used to query an "async jobs service" */
  jobId?: string;
}
export interface BulkApproveMembersRequest {
  /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
  filter?: any;
}
export interface BulkApproveMembersResponse {
  /** Token to be used to query an "async jobs service" */
  jobId?: string;
}
export interface BulkBlockMembersRequest {
  /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
  filter?: any;
}
export interface BulkBlockMembersResponse {
  /** Token to be used to query an "async jobs service" */
  jobId?: string;
}
export interface CreateMemberRequest {
  /** Member to create. */
  member: Member;
}
export interface CreateMemberResponse {
  /** New member. */
  member?: Member;
}
export interface UpdateMemberRequest {
  /** Member to update. */
  member?: Member;
}
export interface UpdateMemberResponse {
  member?: Member;
}
export interface DeleteMemberPhonesRequest {
  /** ID of the member whose phone numbers will be deleted. */
  id: string;
}
export interface DeleteMemberPhonesResponse {
  /** Updated member. */
  member?: Member;
}
export interface DeleteMemberEmailsRequest {
  /** ID of the member whose email addresses will be deleted. */
  id: string;
}
export interface DeleteMemberEmailsResponse {
  /** Updated member. */
  member?: Member;
}
export interface DeleteMemberAddressesRequest {
  /** ID of the member whose street addresses will be deleted. */
  id: string;
}
export interface DeleteMemberAddressesResponse {
  /** Updated member. */
  member?: Member;
}
export interface Empty {}
export interface DomainEvent extends DomainEventBodyOneOf {
  createdEvent?: EntityCreatedEvent;
  updatedEvent?: EntityUpdatedEvent;
  deletedEvent?: EntityDeletedEvent;
  actionEvent?: ActionEvent;
  /** random GUID so clients can tell if event was already handled */
  id?: string;
  /**
   * Assumes actions are also always typed to an entity_type
   * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
   */
  entityFqdn?: string;
  /**
   * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
   * This is although the created/updated/deleted notion is duplication of the oneof types
   * Example: created/updated/deleted/started/completed/email_opened
   */
  slug?: string;
  /**
   * Assuming that all messages including Actions have id
   * Example: The id of the specific order, the id of a specific campaign
   */
  entityId?: string;
  /** The time of the event. Useful if there was a delay in dispatching */
  eventTime?: Date;
  /**
   * A field that should be set if this event was triggered by an anonymize request.
   * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
   * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
   */
  triggeredByAnonymizeRequest?: boolean | null;
  /** If present, indicates the action that triggered the event. */
  originatedFrom?: string | null;
  /**
   * A sequence number defining the order of updates to the underlying entity.
   * For example, given that some entity was updated at 16:00 and than again at 16:01,
   * it is guaranteed that the sequence number of the second update is strictly higher than the first.
   * As the consumer, you can use this value to ensure that you handle messages in the correct order.
   * To do so, you will need to persist this number on your end, and compare the sequence number from the
   * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
   */
  entityEventSequence?: string | null;
}
/** @oneof */
export interface DomainEventBodyOneOf {
  createdEvent?: EntityCreatedEvent;
  updatedEvent?: EntityUpdatedEvent;
  deletedEvent?: EntityDeletedEvent;
  actionEvent?: ActionEvent;
}
export interface EntityCreatedEvent {
  entityAsJson?: string;
}
export interface EntityUpdatedEvent {
  /**
   * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
   * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
   * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
   */
  currentEntityAsJson?: string;
}
export interface EntityDeletedEvent {}
export interface ActionEvent {
  bodyAsJson?: string;
}
export interface MetaSiteSpecialEvent extends MetaSiteSpecialEventPayloadOneOf {
  siteCreated?: SiteCreated;
  siteTransferred?: SiteTransferred;
  siteDeleted?: SiteDeleted;
  siteUndeleted?: SiteUndeleted;
  sitePublished?: SitePublished;
  siteUnpublished?: SiteUnpublished;
  siteMarkedAsTemplate?: SiteMarkedAsTemplate;
  siteMarkedAsWixSite?: SiteMarkedAsWixSite;
  serviceProvisioned?: ServiceProvisioned;
  serviceRemoved?: ServiceRemoved;
  siteRenamedPayload?: SiteRenamed;
  hardDeleted?: SiteHardDeleted;
  namespaceChanged?: NamespaceChanged;
  studioAssigned?: StudioAssigned;
  studioUnassigned?: StudioUnassigned;
  metaSiteId?: string;
  version?: string;
  timestamp?: string;
  assets?: Asset[];
}
/** @oneof */
export interface MetaSiteSpecialEventPayloadOneOf {
  siteCreated?: SiteCreated;
  siteTransferred?: SiteTransferred;
  siteDeleted?: SiteDeleted;
  siteUndeleted?: SiteUndeleted;
  sitePublished?: SitePublished;
  siteUnpublished?: SiteUnpublished;
  siteMarkedAsTemplate?: SiteMarkedAsTemplate;
  siteMarkedAsWixSite?: SiteMarkedAsWixSite;
  serviceProvisioned?: ServiceProvisioned;
  serviceRemoved?: ServiceRemoved;
  siteRenamedPayload?: SiteRenamed;
  hardDeleted?: SiteHardDeleted;
  namespaceChanged?: NamespaceChanged;
  studioAssigned?: StudioAssigned;
  studioUnassigned?: StudioUnassigned;
}
export interface Asset {
  appDefId?: string;
  instanceId?: string;
  state?: State;
}
export declare enum State {
  UNKNOWN = 'UNKNOWN',
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
  PENDING = 'PENDING',
  DEMO = 'DEMO',
}
export interface SiteCreated {
  originTemplateId?: string;
  ownerId?: string;
  context?: SiteCreatedContext;
  /**
   * A meta site id from which this site was created.
   *
   * In case of a creation from a template it's a template id.
   * In case of a site duplication ("Save As" in dashboard or duplicate in UM) it's an id of a source site.
   */
  originMetaSiteId?: string | null;
  siteName?: string;
  namespace?: Namespace;
}
export declare enum SiteCreatedContext {
  /** A valid option, we don't expose all reasons why site might be created. */
  OTHER = 'OTHER',
  /** A meta site was created from template. */
  FROM_TEMPLATE = 'FROM_TEMPLATE',
  /** A meta site was created by copying of the transfferred meta site. */
  DUPLICATE_BY_SITE_TRANSFER = 'DUPLICATE_BY_SITE_TRANSFER',
  /** A copy of existing meta site. */
  DUPLICATE = 'DUPLICATE',
  /** A meta site was created as a transfferred site (copy of the original), old flow, should die soon. */
  OLD_SITE_TRANSFER = 'OLD_SITE_TRANSFER',
  /** deprecated A meta site was created for Flash editor. */
  FLASH = 'FLASH',
}
export declare enum Namespace {
  UNKNOWN_NAMESPACE = 'UNKNOWN_NAMESPACE',
  /** Default namespace for UGC sites. MetaSites with this namespace will be shown in a user's site list by default. */
  WIX = 'WIX',
  /** ShoutOut stand alone product. These are siteless (no actual Wix site, no HtmlWeb). MetaSites with this namespace will *not* be shown in a user's site list by default. */
  SHOUT_OUT = 'SHOUT_OUT',
  /** MetaSites created by the Albums product, they appear as part of the Albums app. MetaSites with this namespace will *not* be shown in a user's site list by default. */
  ALBUMS = 'ALBUMS',
  /** Part of the WixStores migration flow, a user tries to migrate and gets this site to view and if the user likes it then stores removes this namespace and deletes the old site with the old stores. MetaSites with this namespace will *not* be shown in a user's site list by default. */
  WIX_STORES_TEST_DRIVE = 'WIX_STORES_TEST_DRIVE',
  /** Hotels standalone (siteless). MetaSites with this namespace will *not* be shown in a user's site list by default. */
  HOTELS = 'HOTELS',
  /** Clubs siteless MetaSites, a club without a wix website. MetaSites with this namespace will *not* be shown in a user's site list by default. */
  CLUBS = 'CLUBS',
  /** A partially created ADI website. MetaSites with this namespace will *not* be shown in a user's site list by default. */
  ONBOARDING_DRAFT = 'ONBOARDING_DRAFT',
  /** AppBuilder for AppStudio / shmite (c). MetaSites with this namespace will *not* be shown in a user's site list by default. */
  DEV_SITE = 'DEV_SITE',
  /** LogoMaker websites offered to the user after logo purchase. MetaSites with this namespace will *not* be shown in a user's site list by default. */
  LOGOS = 'LOGOS',
  /** VideoMaker websites offered to the user after video purchase. MetaSites with this namespace will *not* be shown in a user's site list by default. */
  VIDEO_MAKER = 'VIDEO_MAKER',
  /** MetaSites with this namespace will *not* be shown in a user's site list by default. */
  PARTNER_DASHBOARD = 'PARTNER_DASHBOARD',
  /** MetaSites with this namespace will *not* be shown in a user's site list by default. */
  DEV_CENTER_COMPANY = 'DEV_CENTER_COMPANY',
  /**
   * A draft created by HTML editor on open. Upon "first save" it will be moved to be of WIX domain.
   *
   * Meta site with this namespace will *not* be shown in a user's site list by default.
   */
  HTML_DRAFT = 'HTML_DRAFT',
  /**
   * the user-journey for Fitness users who want to start from managing their business instead of designing their website.
   * Will be accessible from Site List and will not have a website app.
   * Once the user attaches a site, the site will become a regular wixsite.
   */
  SITELESS_BUSINESS = 'SITELESS_BUSINESS',
  /** Belongs to "strategic products" company. Supports new product in the creator's economy space. */
  CREATOR_ECONOMY = 'CREATOR_ECONOMY',
  /** It is to be used in the Business First efforts. */
  DASHBOARD_FIRST = 'DASHBOARD_FIRST',
  /** Bookings business flow with no site. */
  ANYWHERE = 'ANYWHERE',
  /** Namespace for Headless Backoffice with no editor */
  HEADLESS = 'HEADLESS',
  /**
   * Namespace for master site that will exist in parent account that will be referenced by subaccounts
   * The site will be used for account level CSM feature for enterprise
   */
  ACCOUNT_MASTER_CMS = 'ACCOUNT_MASTER_CMS',
}
/** Site transferred to another user. */
export interface SiteTransferred {
  /** A previous owner id (user that transfers meta site). */
  oldOwnerId?: string;
  /** A new owner id (user that accepts meta site). */
  newOwnerId?: string;
}
/** Soft deletion of the meta site. Could be restored. */
export interface SiteDeleted {
  deleteContext?: DeleteContext;
}
export interface DeleteContext {
  dateDeleted?: Date;
  deleteStatus?: DeleteStatus;
  deleteOrigin?: string;
  initiatorId?: string | null;
}
export declare enum DeleteStatus {
  UNKNOWN = 'UNKNOWN',
  TRASH = 'TRASH',
  DELETED = 'DELETED',
  PENDING_PURGE = 'PENDING_PURGE',
}
/** Restoration of the meta site. */
export interface SiteUndeleted {}
/** First publish of a meta site. Or subsequent publish after unpublish. */
export interface SitePublished {}
export interface SiteUnpublished {
  urls?: string[];
}
export interface SiteMarkedAsTemplate {}
export interface SiteMarkedAsWixSite {}
export interface ServiceProvisioned {
  /** Either UUID or EmbeddedServiceType. */
  appDefId?: string;
  /** Not only UUID. Something here could be something weird. */
  instanceId?: string;
  originInstanceId?: string;
  version?: string | null;
}
export interface ServiceRemoved {
  appDefId?: string;
  instanceId?: string;
  version?: string | null;
}
/** Rename of the site. Meaning, free public url has been changed as well. */
export interface SiteRenamed {
  newSiteName?: string;
  oldSiteName?: string;
}
/**
 * Hard deletion of the meta site.
 *
 * Could not be restored. Therefore it's desirable to cleanup data.
 */
export interface SiteHardDeleted {
  deleteContext?: DeleteContext;
}
export interface NamespaceChanged {
  oldNamespace?: Namespace;
  newNamespace?: Namespace;
}
/** Assigned Studio editor */
export interface StudioAssigned {}
/** Unassigned Studio editor */
export interface StudioUnassigned {}
export interface MemberOwnershipTransferred {
  fromMember?: Member;
  toMember?: Member;
}
export interface UpdateMySlugResponseNonNullableFields {
  member?: {
    status: Status;
    contact?: {
      addresses: {
        streetAddress?: {
          number: string;
          name: string;
        };
      }[];
    };
    profile?: {
      photo?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
      cover?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
    };
    privacyStatus: PrivacyStatusStatus;
    activityStatus: ActivityStatusStatus;
  };
}
export interface JoinCommunityResponseNonNullableFields {
  member?: {
    status: Status;
    contact?: {
      addresses: {
        streetAddress?: {
          number: string;
          name: string;
        };
      }[];
    };
    profile?: {
      photo?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
      cover?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
    };
    privacyStatus: PrivacyStatusStatus;
    activityStatus: ActivityStatusStatus;
  };
}
export interface LeaveCommunityResponseNonNullableFields {
  member?: {
    status: Status;
    contact?: {
      addresses: {
        streetAddress?: {
          number: string;
          name: string;
        };
      }[];
    };
    profile?: {
      photo?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
      cover?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
    };
    privacyStatus: PrivacyStatusStatus;
    activityStatus: ActivityStatusStatus;
  };
}
export interface GetMyMemberResponseNonNullableFields {
  member?: {
    status: Status;
    contact?: {
      addresses: {
        streetAddress?: {
          number: string;
          name: string;
        };
      }[];
    };
    profile?: {
      photo?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
      cover?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
    };
    privacyStatus: PrivacyStatusStatus;
    activityStatus: ActivityStatusStatus;
  };
}
export interface GetMemberResponseNonNullableFields {
  member?: {
    status: Status;
    contact?: {
      addresses: {
        streetAddress?: {
          number: string;
          name: string;
        };
      }[];
    };
    profile?: {
      photo?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
      cover?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
    };
    privacyStatus: PrivacyStatusStatus;
    activityStatus: ActivityStatusStatus;
  };
}
export interface ListMembersResponseNonNullableFields {
  members: {
    status: Status;
    contact?: {
      addresses: {
        streetAddress?: {
          number: string;
          name: string;
        };
      }[];
    };
    profile?: {
      photo?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
      cover?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
    };
    privacyStatus: PrivacyStatusStatus;
    activityStatus: ActivityStatusStatus;
  }[];
}
export interface QueryMembersResponseNonNullableFields {
  members: {
    status: Status;
    contact?: {
      addresses: {
        streetAddress?: {
          number: string;
          name: string;
        };
      }[];
    };
    profile?: {
      photo?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
      cover?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
    };
    privacyStatus: PrivacyStatusStatus;
    activityStatus: ActivityStatusStatus;
  }[];
}
export interface CreateMemberResponseNonNullableFields {
  member?: {
    status: Status;
    contact?: {
      addresses: {
        streetAddress?: {
          number: string;
          name: string;
        };
      }[];
    };
    profile?: {
      photo?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
      cover?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
    };
    privacyStatus: PrivacyStatusStatus;
    activityStatus: ActivityStatusStatus;
  };
}
export interface UpdateMemberResponseNonNullableFields {
  member?: {
    status: Status;
    contact?: {
      addresses: {
        streetAddress?: {
          number: string;
          name: string;
        };
      }[];
    };
    profile?: {
      photo?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
      cover?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
    };
    privacyStatus: PrivacyStatusStatus;
    activityStatus: ActivityStatusStatus;
  };
}
export interface DeleteMemberPhonesResponseNonNullableFields {
  member?: {
    status: Status;
    contact?: {
      addresses: {
        streetAddress?: {
          number: string;
          name: string;
        };
      }[];
    };
    profile?: {
      photo?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
      cover?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
    };
    privacyStatus: PrivacyStatusStatus;
    activityStatus: ActivityStatusStatus;
  };
}
export interface DeleteMemberEmailsResponseNonNullableFields {
  member?: {
    status: Status;
    contact?: {
      addresses: {
        streetAddress?: {
          number: string;
          name: string;
        };
      }[];
    };
    profile?: {
      photo?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
      cover?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
    };
    privacyStatus: PrivacyStatusStatus;
    activityStatus: ActivityStatusStatus;
  };
}
export interface DeleteMemberAddressesResponseNonNullableFields {
  member?: {
    status: Status;
    contact?: {
      addresses: {
        streetAddress?: {
          number: string;
          name: string;
        };
      }[];
    };
    profile?: {
      photo?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
      cover?: {
        id: string;
        url: string;
        height: number;
        width: number;
      };
    };
    privacyStatus: PrivacyStatusStatus;
    activityStatus: ActivityStatusStatus;
  };
}
