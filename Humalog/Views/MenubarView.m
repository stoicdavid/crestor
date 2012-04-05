//
//  MenubarView.m
//  Humalog
//
//  Created by Workstation on 3/1/12.
//  Copyright (c) 2012 Astra Zeneca. All rights reserved.
//

#import "MenubarView.h"
#import "GridLayout.h"
#define MENUBAR_IMAGE @"barra_menu.jpg"
#define MARGIN 15

@interface MenubarView() {
    NSMutableArray *navButtons;
    NSMutableArray *sectionButtons;
    NSArray        *navActions;
}
@end

@implementation MenubarView
@synthesize delegate;

- (NSArray *) setMenu:(int)menuNumber{
    NSArray *sections = [[NSArray alloc]init];
    switch (menuNumber) {
        case 1:
            sections = [NSArray arrayWithObjects:
                                 @"menuA.png",
                                 @"menuB.png",
                                 nil];            
            return sections;
        case 2:
            sections = [NSArray arrayWithObjects:
                        @"menu1.png",
                        @"menu2.png",
                        @"menu3.png",
                        @"menu4.png",
                        nil];            
            return sections;
        case 3:
            sections = [NSArray arrayWithObjects:
                        @"menu5.png",
                        @"menu6.png",
                        @"menu7.png",
                        @"menu8.png",
                        nil];            
            return sections;    
        default:
            break;
    }
    
    return sections;
}

- (void) setSectionButtons:(NSArray *)sections isMenuSelector:(BOOL)selector withSectionNumber:(int) section{
    
    sectionButtons = [NSMutableArray array];
    id sectionLayout = [GridLayout gridWithFrame:CGRectMake(MARGIN, 0, self.frame.size.width * 2 / 3, self.frame.size.height) numRows:1 numCols:[sections count]];
    int i = 0;
    for (NSValue* v in sectionLayout) {
        UIImage  *normalImage = [UIImage imageNamed:[sections objectAtIndex:i]];
        UIImage  *selectedImage = [UIImage imageNamed:[@"over_" stringByAppendingString:[sections objectAtIndex:i]]];
        UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
        button.frame = CGRectMake(0, 0, normalImage.size.width, normalImage.size.height);
        button.center = [v CGPointValue];
        button.frame = CGRectIntegral(button.frame);
        [button setImage:normalImage forState:UIControlStateNormal];
        [button setImage:selectedImage forState:UIControlStateSelected];
        
        if(selector){
            button.tag=i+90;
        }else if (section==1){
            button.tag=section;
        }else {
            button.tag=section;
        }
        NSLog(@"%d",button.tag);
        [sectionButtons addObject:button];
        [self addSubview:button];
        ++i;
    }
}

- (void) removeSelectorButtons:(NSArray *) buttons{
    for (UIButton * button in buttons){
        [button removeFromSuperview];
    }
}

- (id)init
{
    self = [super initWithImage:[UIImage imageNamed:MENUBAR_IMAGE]];
    if (self) {
        self.userInteractionEnabled = YES;
        
        // Section buttons
        [self setSectionButtons:[self setMenu:1] isMenuSelector:YES withSectionNumber:0];
        
        
        
        // Nav buttons
        navButtons = [NSMutableArray array];
        
        NSArray *buttons = [NSArray arrayWithObjects:
                            @"btn_apertura.png",
                            @"btn_cierre.png",
                            @"btn_ipp.png",
                            @"btn_referencias.png",                            
                            nil];
        
        navActions = [NSArray arrayWithObjects:
                      [NSValue valueWithPointer:@selector(menubarViewDidPressApertura)],
                      [NSValue valueWithPointer:@selector(menubarViewDidPressCierre)],
                      [NSValue valueWithPointer:@selector(menubarViewDidPressIPP)],
                      [NSValue valueWithPointer:@selector(menubarViewDidPressReferencias)],                      
                      nil];

        id buttonLayout = [GridLayout gridWithFrame:CGRectMake(2 * MARGIN + self.frame.size.width * 2 / 3, 0, self.frame.size.width * 1 / 5, self.frame.size.height) numRows:1 numCols:[buttons count]];
        int i = 0;
        for (NSValue* v in buttonLayout) {
            UIImage  *normalImage = [UIImage imageNamed:[buttons objectAtIndex:i]];
            UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
            button.frame = CGRectMake(0, 0, normalImage.size.width, normalImage.size.height);
            button.center = [v CGPointValue];
            button.frame = CGRectIntegral(button.frame);
            [button setImage:normalImage forState:UIControlStateNormal];
            [self addSubview:button];
            [navButtons addObject:button];
            ++i;
        }
    }
    return self;
}


- (void)selectMenu:(UIButton *)button{
    if (button.tag==90){
        NSLog(@"%d",button.tag);
        [self removeSelectorButtons:sectionButtons];
        [self setSectionButtons:[self setMenu:2] isMenuSelector:NO withSectionNumber:1];
    

    }else if(button.tag==91){
        [self removeSelectorButtons:sectionButtons];
        [self setSectionButtons:[self setMenu:3] isMenuSelector:NO withSectionNumber:2];

    }
    self.delegate = delegate;    
}

- (void)sectionPressed:(UIButton *)button
{
    if (button.selected) {
        button.selected = NO;
        
        [self.delegate menubarViewDidDeselectCategoryButton:button withIndex:[sectionButtons indexOfObject:button]];

        return;
    }
    
    for (UIButton *buttons in sectionButtons)
        buttons.selected = NO;
        
    //button.selected = YES;
    if (button.tag==1) {
        [self.delegate menubarViewDidSelectCategoryButton:button withIndex:[sectionButtons indexOfObject:button]];
    }else if (button.tag==2){
        [self.delegate menubarViewDidSelectCategoryButton:button withIndex:[sectionButtons indexOfObject:button]+4];
    }
}



- (void)setDelegate:(id<InterfaceControlDelegate>)newDelegate
{
    // Update sections
    NSArray *buttons = sectionButtons;
    for (UIButton *button in buttons) {
        if (button.tag>=90) {
            
            [button addTarget:self
                       action:@selector(selectMenu:)
             forControlEvents:UIControlEventTouchDown];
            button.enabled = YES;

        }else {
            
            
            if (self.delegate) {
                [button removeTarget:self
                              action:NULL
                    forControlEvents:UIControlEventTouchDown];
            }
         
            if ([newDelegate respondsToSelector:@selector(menubarViewDidSelectCategoryButton:withIndex:)]) {
                [button addTarget:self
                           action:@selector(sectionPressed:)
                 forControlEvents:UIControlEventTouchDown];
                button.enabled = YES;
            
             
                
            } else {
                button.enabled = NO;
            }
        }
    }
    // Update navigation
    buttons = navButtons;
    NSArray *actions = navActions;
    for (UIButton *button in buttons) {
        if (self.delegate) {
            [button removeTarget:self.delegate
                          action:NULL
                forControlEvents:UIControlEventTouchDown];
        }
        SEL action = [[actions objectAtIndex:[buttons indexOfObject:button]] pointerValue];
        if ([newDelegate respondsToSelector:action]) {
            [button addTarget:newDelegate
                       action:action
             forControlEvents:UIControlEventTouchDown];
            button.enabled = YES;
        } else {
            button.enabled = NO;
        }
    }

    // Navigation
    [(NSObject *)delegate removeObserver:self
                              forKeyPath:@"navigationPosition"];
    
    [(NSObject *)newDelegate addObserver:self
                              forKeyPath:@"navigationPosition"
                                 options:NSKeyValueObservingOptionNew
                                 context:nil];
        
    delegate = newDelegate;

}

- (void)observeValueForKeyPath:(NSString *)keyPath
                      ofObject:(id)object
                        change:(NSDictionary *)change
                       context:(void *)context
{
    if ([keyPath isEqualToString:@"navigationPosition"]) {
        
        enum NavigationPosition navigationPositionValue = [[change objectForKey:NSKeyValueChangeNewKey] intValue];
        
        UIButton *aperturaButton = [navButtons objectAtIndex:0];
        UIButton *cierreButton = [navButtons objectAtIndex:1];
        switch (navigationPositionValue) {
            case NavigationPositionFirstDocument:
                [self removeSelectorButtons:sectionButtons];
                [self setSectionButtons:[self setMenu:1] isMenuSelector:YES withSectionNumber:0];
                self.delegate=delegate;
                aperturaButton.enabled = NO;
                cierreButton.enabled = YES;
                break;
            case NavigationPositionLastDocument:
                aperturaButton.enabled = YES;
                cierreButton.enabled = NO;
                break;
            case NavigationPositionOtherDocument:
                aperturaButton.enabled = YES;
                cierreButton.enabled = YES;
                break;
            case NavigationPositionUndefined:
            default:
                aperturaButton.enabled = NO;
                cierreButton.enabled = NO;
                break;
        }
    }
}



/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect
{
    // Drawing code
}
*/

@end
