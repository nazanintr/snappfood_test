export interface IVendor {
    type: string;
    data: {
        action: string;
        address: string;
        area: string;
        backgroundImage: string;
        backgroundImageCustom: string;
        badges: any[]; 
        best_coupon: string;
        bid: boolean;
        budgetClass: string;
        childType: string;
        city: string;
        click_id: string | null;
        commentCount: number;
        containerFee: number;
        costsForTwo: number;
        countOfUserImages: number;
        countReview: number;
        coupon_count: number;
        coverPath: string;
        cpc_campaign_hash: string | null;
        cpc_spot: string | null;
        cuisinesArray: any[];
        defLogo: string;
        delay: string;
        delay_time: number;
        deliver: boolean;
        deliveryArea: string;
        deliveryFee: number;
        deliveryFeeDiscount: number;
        deliveryGuarantee: boolean;
        deliveryTime: number;
        description: string;
        discount: number;
        discountForAll: boolean;
        discountStartHour1: string;
        discountStartHour2: string;
        discountStopHour1: string;
        discountStopHour2: string;
        discountType: string | null;
        discountValue: number;
        discountValueForView: number;
        establishment: string;
        eta: number;
        foodTypes: any[]; 
        has_cashback: boolean;
        has_coupon: boolean;
        has_delay: boolean;
        has_first_coupon: boolean;
        id: number;
        isFavorite: boolean;
        isOpen: boolean;
        isZFExpress: boolean;
        is_ecommerce: boolean;
        is_economical: boolean;
        is_food_party: boolean;
        is_grocery_economic: boolean;
        is_grocery_returnable: boolean;
        is_grocery_vip: boolean;
        is_market_party: boolean;
        is_pro: boolean;
        lat: number;
        logo: string;
        lon: number;
        maxDeliveryFee: number;
        max_eta: number;
        menuImage: any[]; 
        menuUrl: string;
        minDeliveryFee: number;
        minOrder: number;
        min_eta: number;
        mostPopularItems: string;
        new_type: string;
        new_type_title: string;
        noOrder: boolean;
        onlineOrder: boolean;
        open_at_eta: boolean;
        paymentTypes: number[];
        phone: string;
        preOrderEnabled: boolean;
        preorderToday: {
            weekday: string;
            name: string;
            startHour: string;
            intervals: any[]; 
        };
        priority: number;
        rate: number;
        rating: number;
        recommendedFor: string;
        restaurantClass: string;
        restaurantTypes: any[]; 
        schedules: any[]; 
        serviceFee: number;
        status: number;
        status_description: string;
        status_text: string;
        status_title: string;
        superTypeAlias: string;
        tax: number;
        taxEnabled: boolean;
        taxEnabledInDeliveryFee: boolean;
        taxEnabledInPackaging: boolean;
        taxEnabledInProducts: boolean;
        taxIncluded: boolean;
        title: string;
        total_time: number;
        trendingScore: number;
        userImage: any[]; 
        vendorCode: string;
        vendorType: string;
        vendorTypeTitle: string;
        voteCount: number;
        website: string;
    }
};