//
//  Viewport.h
//  Humalog
//
//  Created by Workstation on 3/16/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Viewport : NSObject

+ (CGRect)screenArea;
+ (CGRect)contentArea;
+ (CGRect)menuArea;
@end
